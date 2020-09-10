import { DAYS_ARRAY } from '../constants/actionTypes';
import { TimeArrayState } from '../constants/interfaces';
import moment from 'moment';

const now = moment();

const setDaysArray = (state: TimeArrayState, action: any): TimeArrayState => ({
   ...state,
   daysArray: action.payload
});

const initialState = {
   daysArray: [{ date: now, dayOfWeek: 'Monday' }],
   weeksArray: [],
   monthsArray: []
};

const timeArrayReducers = (state = initialState, action: any) => {
   switch (action.type) {
      case DAYS_ARRAY:
         return setDaysArray(state, action);
      default:
         return state;
   }
};

export default timeArrayReducers;
