import moment from 'moment';
import { TimeArray, TimeObj } from '../constants/interfaces';

const ArrayPopulate: any = (timeUnits: number, birthday: string): TimeArray => {
   let timeArray = new Array(timeUnits).fill(null);
   console.log(birthday);
   timeArray = timeArray.map(
      (x, i): TimeObj => {
         let thisDate = moment(birthday).add(i, 'd');

         return {
            date: thisDate,
            dayOfWeek: thisDate.format('dddd').substring(0, 3)
         };
      }
   );

   return timeArray;
};

export default ArrayPopulate;
