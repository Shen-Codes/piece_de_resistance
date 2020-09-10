import { combineReducers } from 'redux';
import dayCalcReducers from './dayCalcReducers';
import timeArrayReducers from './timeArrayReducers';
const rootReducer = combineReducers({
    dayState: dayCalcReducers,
    timeArrayState: timeArrayReducers
});
export default rootReducer;
