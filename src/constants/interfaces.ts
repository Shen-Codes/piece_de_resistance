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

export interface TimeObj {
   date: moment.Moment;
   dayOfWeek?: string;
   tasks: Array<{}>;
}

export interface TimeArray {
   [index: number]: TimeObj;
}

export interface TimeArrayState {
   daysArray: TimeArray;
   weeksArray: TimeArray;
   monthsArray: TimeArray;
}
