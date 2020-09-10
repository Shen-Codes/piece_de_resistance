import { TOTAL_DAYS, BIRTHDAY, DAYS_ARRAY } from '../constants/actionTypes';
export const setTotalDays = (totalDays) => {
    return {
        type: TOTAL_DAYS,
        payload: totalDays
    };
};
export const setBirthDay = (birthday) => {
    return {
        type: BIRTHDAY,
        payload: birthday
    };
};
export const setDaysArray = (daysArray) => {
    return {
        type: DAYS_ARRAY,
        payload: daysArray
    };
};
