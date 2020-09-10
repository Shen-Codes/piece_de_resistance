import { DAYS_ARRAY } from '../constants/actionTypes';
const setDaysArray = (state, action) => (Object.assign(Object.assign({}, state), { daysArray: action.payload }));
const initialState = {
    daysArray: [],
    weeksArray: [],
    monthsArray: []
};
const timeArrayReducers = (state = initialState, action) => {
    switch (action.type) {
        case DAYS_ARRAY:
            return setDaysArray(state, action);
        default:
            return;
    }
};
export default timeArrayReducers;
