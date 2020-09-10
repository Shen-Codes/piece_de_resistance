import { TOTAL_DAYS, BIRTHDAY, DAYS_ARRAY } from '../constants/actionTypes';
import {
   SetTotalDaysAction,
   SetBirthdayAction,
   TimeArray
} from '../constants/interfaces';

export const setTotalDays = (totalDays: number): SetTotalDaysAction => {
   return {
      type: TOTAL_DAYS,
      payload: totalDays
   };
};

export const setBirthDay = (birthday: string): SetBirthdayAction => {
   return {
      type: BIRTHDAY,
      payload: birthday
   };
};

export const setDaysArray = (daysArray: TimeArray): any => {
   return {
      type: DAYS_ARRAY,
      payload: daysArray
   };
};
