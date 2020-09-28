import {
  TOTAL_DAYS,
  BIRTHDAY,
  DAYS_ARRAY,
  SET_TASKS,
  SET_TASK,
  MOVE_CARD
} from '../constants/actionTypes';
import { TaskObj, TimeObj } from '../constants/interfaces';

// export const setTotalDays = (totalDays: number): SetTotalDaysAction => {
//   return {
//     type: TOTAL_DAYS,
//     payload: totalDays
//   };
// };

// export const setBirthDay = (birthday: string): SetBirthdayAction => {
//   return {
//     type: BIRTHDAY,
//     payload: birthday
//   };
// };

interface Action {
  type: string;
  payload: any;
  date?: string;
  id?: string;
  index?: number;
}
export const setDaysArray = (daysArray: Array<TimeObj>): Action => {
  return {
    type: DAYS_ARRAY,
    payload: daysArray
  };
};

export const setTasksArray = (tasks: Array<TaskObj>, date: string): Action => {
  return {
    type: SET_TASKS,
    payload: tasks,
    date: date
  };
};

export const setSingleTask = (
  task: TaskObj,
  date: string,
  id: string
): Action => {
  return {
    type: SET_TASK,
    payload: task,
    date: date,
    id: id
  };
};

export const moveCard = (
  task: TaskObj,
  date: string,
  index: number
): Action => {
  return {
    type: MOVE_CARD,
    payload: task,
    date: date,
    index: index
  };
};
