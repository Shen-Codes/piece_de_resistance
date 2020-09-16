import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DayState, TimeArray } from '../constants/interfaces';
import ArrayPopulate from '../utils/arrayPopulate';
import { setDaysArray } from '../actions';
import OneDay from '../components/time-units/oneDay';
import { CalendarMain, CalContainer } from './styles';

const Calendar: React.FC<any> = (props: any): any => {
   const [unnecessaryStateArray, setUnnecessaryStateArray] = useState([]);
   const { totalDays, birthday } = useSelector((state: any) => state.dayState);

   const dispatch = useDispatch();

   let timeArray: any = [];

   useEffect(() => {
      timeArray = ArrayPopulate(totalDays, birthday);
      dispatch(setDaysArray(timeArray));
      setUnnecessaryStateArray(timeArray);
   }, [birthday]);

   return (
      <CalendarMain>
         <h1>Calendar</h1>
         <CalContainer>
            {unnecessaryStateArray.map((x: any) => (
               <OneDay
                  key={x.date.format('YYYY-MM-DD')}
                  dayOfWeek={x.dayOfWeek}
                  date={x.date.format('YYYY-MM-DD')}
                  tasks={x.tasks}
               >
                  Hello
               </OneDay>
            ))}
         </CalContainer>
      </CalendarMain>
   );
};

export default Calendar;
