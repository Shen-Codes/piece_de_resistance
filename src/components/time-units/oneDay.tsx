import React, { useState, useCallback } from 'react';
import moment from 'moment';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { StyledCard } from './styles';
import { ItemTypes } from '../../constants/itemTypes';
import { Card } from '../card/card';

interface Props {
  dayOfWeek: string;
  date: moment.Moment;
  tasks: any;
}

const OneDay: React.FC<Props> = (props: Props): any => {
  const [tasks, setTasks] = useState([]);
  const [addState, setAddState] = useState(false);

  const [{ getItem }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      onDrop(item, monitor, props.date);
    },
    collect: monitor => ({
      getItem: monitor.getItem()
    })
  });

  const onDrop = useCallback(
    (item: any, monitor: any, date: any) => {
      let hoverIndex = 0;
      if (!getItem) {
        hoverIndex = 0;
      } else {
        hoverIndex = getItem.hoverIndex;
      }
      console.log(monitor);
      setTasks(prevState => {
        if (item.date !== props.date) {
          item = { ...item, date: props.date };
        }
        const newItems = prevState.filter(i => i.id !== item.id);
        newItems.splice(hoverIndex, 0, item);
        return [...newItems];
      });
    },
    [tasks]
  );

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = tasks[dragIndex];

      setTasks(prevState => {
        const newItems = prevState.filter((item, idx) => idx !== dragIndex);
        newItems.splice(hoverIndex, 0, dragCard);
        return [...newItems];
      });
    },
    [tasks]
  );

  return (
    <StyledCard ref={drop}>
      <h4>{props.dayOfWeek}</h4>
      <h4>{props.date}</h4>
      <button onClick={() => setAddState(true)}>Add</button>
      {addState && (
        <Card
          setId={uuidv4}
          text=""
          index={0}
          addState={addState}
          setAddState={setAddState}
          moveCard={moveCard}
          setTasks={setTasks}
          date={props.date}
        />
      )}
      <h6>Tasks</h6>
      {tasks.length > 0 &&
        tasks.map((task: any, i) => (
          <Card
            id={task.id}
            text={task.text}
            index={i}
            moveCard={moveCard}
            setTasks={setTasks}
            date={props.date}
            key={task.id}
          />
        ))}
    </StyledCard>
  );
};

export default OneDay;
