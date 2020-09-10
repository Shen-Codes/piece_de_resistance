import * as moment from 'moment';
const TotalDays = (date) => {
    const bDay = moment(date);
    const dDay = bDay.add(87, 'y');
    const totalDays = bDay.diff(dDay, 'days');
    return totalDays;
};
export default TotalDays;
