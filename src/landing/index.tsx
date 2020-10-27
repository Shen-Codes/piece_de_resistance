import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TotalDays from '../utils/totalDays';
import Calendar from '../calendar';
import CalendarTest from '../calendar/calendarTest';
import ArrayPopulate from '../utils/arrayPopulate';
import { setDaysArray } from '../actions';
import './index.css';

const Landing: React.FC = (): any => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  let totalDays = 0;
  let timeArray = [];

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    totalDays = TotalDays(input);
    timeArray = ArrayPopulate(totalDays, input);
    dispatch(setDaysArray(timeArray));
  };

  const handleChange = (e: any): void => {
    e.preventDefault;
    setInput(e.target.value);
  };

  return (
    <div>
      <div className="the-top-part">
        <div>
          <form onSubmit={handleSubmit}>
            <label>Please enter your birthday as format YYYY-MM-DD</label>
            <input type="text" value={input} onChange={handleChange} />
            <button onSubmit={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <CalendarTest />
      {/* <Calendar /> */}
    </div>
  );
};

export default Landing;
