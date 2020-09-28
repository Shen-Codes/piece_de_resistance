import moment from 'moment';
import { TimeObj } from '../constants/interfaces';

const ArrayPopulate = (timeUnits: number, birthday: string): Array<TimeObj> => {
  let timeArray = new Array(timeUnits).fill(null);

  timeArray = timeArray.map(
    (x, i): TimeObj => {
      let thisDate = moment(birthday).add(i, 'd');

      return {
        date: thisDate.format('YYYY-MM-DD'),
        dayOfWeek: thisDate.format('dddd').substring(0, 3),
        tasks: [{}]
      };
    }
  );

  return timeArray;
};

export default ArrayPopulate;
