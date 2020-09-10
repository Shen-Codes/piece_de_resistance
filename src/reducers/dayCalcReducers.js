import { TOTAL_DAYS, BIRTHDAY } from '../constants/actionTypes';
const setTotalDays = (state, action) => (Object.assign(Object.assign({}, state), { totalDays: action.payload }));
const setBirthday = (state, action) => (Object.assign(Object.assign({}, state), { birthday: action.payload }));
const initialState = {
    totalDays: 1,
    dayOfWeek: 'Mon',
    birthday: '2020-01-01'
};
const dayCalcReducers = (state = initialState, action) => {
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
