import * as moment from 'moment';
const ArrayPopulate = (timeUnits, birthday) => {
    let timeArray = new Array(timeUnits).fill(null);
    let bday = moment(birthday, 'YYYY-MM-DD');
    timeArray = timeArray.map((x, i) => {
        let thisDate = bday.add(i, 'd');
        return {
            date: thisDate,
            dayOfWeek: thisDate.format('DDDD')
        };
    });
    return timeArray;
};
export default ArrayPopulate;
