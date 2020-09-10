import moment from 'moment';

const TotalDays = (date: string): number => {
   const bday = moment(date);

   const dday = moment(date).add(1, 'M');

   const totalDays = dday.diff(bday, 'days');

   return totalDays;
};

export default TotalDays;
