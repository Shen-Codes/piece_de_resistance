import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { ItemTypes } from '../../constants/itemTypes';
import { setSingleTask } from '../../actions';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

export interface CardProps {
  id?: string;
  text: string;
  addState?: boolean;
  setAddState?: any;
  date: string;
  moveCard: (atIndex: number, atDate: string, id: string) => void;
  findIndex: (id: string) => { index: number; date: string };
}

interface DragItem {
  id: string;
  type: string;
}
export const Card: React.FC<CardProps> = ({
  id,
  text,
  addState,
  setAddState,
  date,
  moveCard,
  findIndex
}) => {
  const [textData, setTextData] = useState(text);
  const [editState, setEditState] = useState(false);
  const dispatch = useDispatch();

  const ref = useRef(null);

  const setToggle = (): void => {
    if (addState && !editState) {
      setAddState(false);
    } else if (!addState && editState) {
      setEditState(false);
    }
  };

  const handleChange = e => {
    e.preventDefault();
    setTextData(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let oldId;
    if (addState && !editState) {
      oldId = uuidv4();
    } else if (!addState && editState) {
      oldId = id;
    }
    const task = {
      id: oldId,
      text: textData,
      date: date
    };

    setToggle();
    dispatch(setSingleTask(task, date, id));
  };

  const [, drag] = useDrag({
    item: { type: ItemTypes.CARD, id }
  });

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover: ({ id: draggedId }: DragItem) => {
      if (draggedId !== id) {
        const { index: overIndex, date: overDate } = findIndex(id);

        moveCard(overIndex, overDate, draggedId);
      }
    }
  });

  const renderBody = () => {
    if (!addState && !editState) {
      return (
        <>
          <span>{`${text} ${date}   ${id}`}</span>
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

  return (
    <div ref={node => drag(drop(node))} style={{ ...style }}>
      {renderBody()}
    </div>
  );
};
