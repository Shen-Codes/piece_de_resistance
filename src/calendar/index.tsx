import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setDaysArray } from '../actions';
import OneDay from '../components/time-units/oneDay';
import { TaskObj, TimeArrayState } from '../constants/interfaces';
import { CalendarMain, CalContainer } from './styles';

const Calendar: React.FC = (): any => {
  const { daysArray } = useSelector(
    (state: any): TimeArrayState => state.timeArrayState
  );
  const dispatch = useDispatch();

  const findCard = (id: string): TaskObj => {
    const tasksArray = daysArray.filter(day => {
      const tasks = day.tasks;
      return !!tasks.filter(task => task.id === id)[0];
    })[0].tasks;

    const card = tasksArray.filter(task => task.id === id)[0];
    return card;
  };

  const findIndex = (id: string): { index: number; date: string } => {
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

  const moveCard = (atIndex: number, atDate: string, id: string): void => {
    const card = findCard(id);
    const newDaysArray = daysArray.map(day => {
      const newTasks = day.tasks.filter(task => task.id !== id);
      if (day.date === atDate) {
        newTasks.splice(atIndex, 0, card);
      }
      const newDay = { ...day, tasks: newTasks };
      return newDay;
    });
    dispatch(setDaysArray(newDaysArray));
  };

  return (
    <CalendarMain>
      <h1>Calendar</h1>
      <CalContainer>
        {daysArray.map((day: any) => (
          <OneDay
            key={day.date}
            dayOfWeek={day.dayOfWeek}
            date={day.date}
            tasks={day.tasks}
            moveCard={moveCard}
            findIndex={findIndex}
          />
        ))}
      </CalContainer>
    </CalendarMain>
  );
};

export default Calendar;
