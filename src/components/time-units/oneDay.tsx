import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { StyledCard } from './styles';
import { ItemTypes } from '../../constants/itemTypes';
import { Card } from '../card/card';
import { TaskObj } from '../../constants/interfaces';

interface Props {
  dayOfWeek: string;
  date: string;
  tasks: Array<TaskObj>;
  moveCard: (atIndex: number, atDate: string, id: string) => void;
  findIndex: (id: string) => { index: number; date: string };
}

const OneDay: React.FC<Props> = ({
  date,
  dayOfWeek,
  tasks,
  moveCard,
  findIndex
}): any => {
  const [addState, setAddState] = useState(false);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD
  });

  return (
    <StyledCard ref={drop}>
      <h4>{dayOfWeek}</h4>
      <h4>{date}</h4>
      <button onClick={() => setAddState(true)}>Add</button>
      {addState && (
        <Card
          text=""
          addState={addState}
          setAddState={setAddState}
          moveCard={moveCard}
          findIndex={findIndex}
          date={date}
          key={1}
        />
      )}
      <h6>Tasks</h6>
      {tasks.map((task: any, i) => {
        return (
          task.id && (
            <Card
              key={task.id}
              id={task.id}
              text={task.text}
              moveCard={moveCard}
              date={task.date}
              findIndex={findIndex}
            />
          )
        );
      })}
    </StyledCard>
  );
};

export default OneDay;
