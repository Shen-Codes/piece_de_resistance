import * as React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import TotalDays from '../utils/totalDays';
import { setTotalDays, setBirthDay } from '../actions';
import Calendar from '../calendar';
import './index.css';

const Landing: React.FC = (): any => {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  let now = moment('2000-01-01');
  let then = moment('2000-01-01').add(40, 'y');
  let dayBetween = then.diff(now, 'd');

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const totalDays = TotalDays(input);
    dispatch(setBirthDay(input));
    dispatch(setTotalDays(totalDays));
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
      <Calendar />
    </div>
  );
};

export default Landing;
