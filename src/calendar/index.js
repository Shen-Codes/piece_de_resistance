import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArrayPopulate from '../utils/arrayPopulate';
import { setDaysArray } from '../actions';
import OneDay from '../components/oneDay';
import { CalContainer } from './styles';
const Calendar = (props) => {
    const { totalDays, birthday } = useSelector((state) => state);
    const dispatch = useDispatch();
    let timeArray = [];
    useEffect(() => {
        timeArray = ArrayPopulate(totalDays, birthday);
        dispatch(setDaysArray(timeArray));
    }, [totalDays]);
    return (React.createElement(CalContainer, null, timeArray.map((x) => (React.createElement(OneDay, { key: x.date, dayOfWeek: x.dayOfWeek, date: x.date })))));
};
export default Calendar;
