import { TOTAL_DAYS, BIRTHDAY } from './actionTypes';

export interface SetTotalDaysAction {
  type: typeof TOTAL_DAYS;
  payload: number;
}

export interface SetBirthdayAction {
  type: typeof BIRTHDAY;
  payload: string;
}

export interface DayState {
  totalDays: number;
  dayOfWeek: string;
  birthday: string;
}

export interface TaskObj {
  id?: string;
  text?: string;
}

export interface TimeObj {
  date: string;
  dayOfWeek?: string;
  tasks: Array<TaskObj>;
}

export interface TimeArrayState {
  daysArray: Array<TimeObj>;
  weeksArray: Array<TimeObj>;
  monthsArray: Array<TimeObj>;
}
