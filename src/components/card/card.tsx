import React, { useRef, useState } from 'react';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import { XYCoord } from 'dnd-core';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

export interface CardProps {
  id?: any;
  setId?: any;
  text: string;
  index: number;
  addState?: boolean;
  setAddState?: any;
  setTasks: any;
  date: any;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}
export const Card: React.FC<CardProps> = ({
  id,
  setId,
  text,
  index,
  addState,
  setAddState,
  setTasks,
  date,
  moveCard
}) => {
  const [textData, setTextData] = useState(text);
  const [editState, setEditState] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const setToggle = () => {
    if (addState) {
      setAddState(false);
    } else {
      setEditState(false);
    }
  };

  const handleChange = e => {
    e.preventDefault();
    setTextData(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      setTasks(prevState =>
        prevState.map(task => {
          if (task.id === id) {
            return { ...task, text: textData };
          }
        })
      );
    } else {
      const task = {
        id: setId(),
        text: textData,
        date: date
      };
      setToggle();
      setTasks(prevState => prevState.concat(task));
    }
  };

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    }
  });

  const renderBody = () => {
    if (!addState && !editState) {
      return (
        <>
          <span>{`${text} ${id} ${date}`}</span>
          <button onClick={() => setEditState(true)}>Edit</button>
        </>
      );
    } else if ((addState && !editState) || (!addState && editState)) {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <label>Task</label>
            <input value={textData} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={() => setToggle()}>Cancel</button>
          </form>
        </>
      );
    } else {
      return <p>Something Fucky Happened</p>;
    }
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index, text },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {renderBody}
    </div>
  );
};
