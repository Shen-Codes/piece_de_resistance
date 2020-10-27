import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { StyledCard } from './styles';
import { setDaysArray, setTasksArray } from '../../actions';
import { ItemTypes } from '../../constants/itemTypes';
import { Card } from '../card/card';

// interface Props {
//   dayOfWeek: string;
//   date: string;
//   tasks?: any;
//   moveCard?: any;
//   findIndex?: any;
// }

// const OneDay: React.FC<Props> = ({
//   date,
//   dayOfWeek,
//   tasks,
//   moveCard,
//   findIndex
// }): any => {
//   const [addState, setAddState] = useState(false);

//   const [, drop] = useDrop({
//     accept: ItemTypes.CARD
//   });

//   return (
//     <StyledCard ref={drop}>
//       <h4>{dayOfWeek}</h4>
//       <h4>{date}</h4>
//       <button onClick={() => setAddState(true)}>Add</button>
//       {addState && (
//         <Card
//           text=""
//           addState={addState}
//           setAddState={setAddState}
//           moveCard={moveCard}
//           date={date}
//           key={1}
//         />
//       )}
//       <h6>Tasks</h6>
//       {tasks.map((task: any, i) => {
//         return (
//           task.id && (
//             <Card
//               key={task.id}
//               id={task.id}
//               text={task.text}
//               moveCard={moveCard}
//               date={task.date}
//               findIndex={findIndex}
//             />
//           )
//         );
//       })}
//     </StyledCard>
//   );
// };

interface Props {
  dayOfWeek: string;
  date: string;
  tasks?: any;
  daysArray?: any;
}

const OneDayTest: React.FC<Props> = ({
  date,
  dayOfWeek,
  tasks,
  daysArray
}): any => {
  const [arrayOfDays, setArrayOfDays] = useState(daysArray);
  const [addState, setAddState] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setArrayOfDays(daysArray);
  }, [daysArray]);

  const findCard = id => {
    const tasksArray = arrayOfDays.filter(day => {
      const tasks = day.tasks;
      return !!tasks.filter(task => task.id === id)[0];
    })[0].tasks;

    const card = tasksArray.filter(task => task.id === id)[0];
    return card;
  };

  const moveCard = (atIndex, atDate, id) => {
    const card = findCard(id);
    const newDaysArray = daysArray.map(day => {
      const newTasks = day.tasks.filter(task => task.id !== id);
      if (day.date === atDate) {
        newTasks.splice(atIndex, 0, card);
      }
      const newDay = { ...day, tasks: newTasks };
      return newDay;
    });
    setArrayOfDays(newDaysArray);
  };

  const findIndex = id => {
    const day = daysArray.filter(day => {
      const tasks = day.tasks;
      return !!tasks.filter(task => task.id === id)[0];
    })[0];
    const index = day.tasks.findIndex(task => task.id === id);

    return {
      index: index,
      date: day.date
    };
  };

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      dispatch(setDaysArray(arrayOfDays));
    }
  });

  return (
    <StyledCard ref={drop}>
      <h4>{dayOfWeek}</h4>
      <h4>{date}</h4>
      <button onClick={() => setAddState(true)}>Add</button>
      {addState && (
        <Card
          setId={uuidv4}
          text=""
          addState={addState}
          setAddState={setAddState}
          moveCard={moveCard}
          date={date}
          key={1}
        />
      )}
      <h6>Tasks</h6>
      {arrayOfDays
        .filter(day => day.date === date)[0]
        .tasks.map((task: any, i) => {
          return (
            task.id && (
              <Card
                id={task.id}
                text={task.text}
                moveCard={moveCard}
                date={task.date}
                key={task.id}
                findCard={findCard}
                findIndex={findIndex}
              />
            )
          );
        })}
    </StyledCard>
  );
};
export default OneDayTest;
