import { TOTAL_DAYS, BIRTHDAY } from '../constants/actionTypes';
import {
   SetTotalDaysAction,
   SetBirthdayAction,
   DayState
} from '../constants/interfaces';

const setTotalDays = (
   state: DayState,
   action: SetTotalDaysAction
): DayState => ({
   ...state,
   totalDays: action.payload
});

const setBirthday = (state: DayState, action: SetBirthdayAction): DayState => ({
   ...state,
   birthday: action.payload
});

const initialState: DayState = {
   totalDays: 1,
   dayOfWeek: 'Mon',
   birthday: '2020-01-01'
};

const dayCalcReducers = (state = initialState, action: any) => {
   switch (action.type) {
      case TOTAL_DAYS:
         return setTotalDays(state, action);
      case BIRTHDAY:
         return setBirthday(state, action);
      default:
         return state;
   }
};

export default dayCalcReducers;
