import { DAYS_ARRAY, SET_TASKS, SET_TASK } from '../constants/actionTypes';
import { TimeArrayState } from '../constants/interfaces';
import moment from 'moment';

const initialState = {
  daysArray: [
    {
      date: '2020-12-27',
      dayOfWeek: 'Sunday',
      tasks: []
    },
    {
      date: '2020-12-28',
      dayOfWeek: 'Monday',
      tasks: []
    },
    {
      date: '2020-12-29',
      dayOfWeek: 'Tuesday',
      tasks: []
    }
  ],
  weeksArray: [],
  monthsArray: [],
  tasksArray: [
    { id: 'xeysdhf', text: 'incorrect hooks?', date: '2020-12-27' },
    { id: 'xeyabtrh', text: 'but how?', date: '2020-12-27' },
    {
      id: 'adsvvmroi',
      text: 'this is getting annoying',
      date: '2020-12-27'
    },
    { id: 'abjoieame', text: 'what to do?', date: '2020-12-28' },
    {
      id: 'abjoieamb',
      text: 'read more on the internet?',
      date: '2020-12-28'
    },
    { id: 'aoibihb', text: 'poop', date: '2020-12-28' },
    {
      id: 'ajdibanroi',
      text: 'why is this not working!',
      date: '2020-12-29'
    },
    {
      id: 'ibripnae',
      text: 'what the F am I doing wrong?',
      date: '2020-12-29'
    },
    { id: 'waibnpene', text: 'ugh', date: '2020-12-29' }
  ]
};

const setDaysArray = (state: TimeArrayState, action: any): TimeArrayState => ({
  ...state,
  daysArray: action.payload
});

const setTasks = (state: TimeArrayState, action: any): TimeArrayState => {
  const { payload, date } = action;
  let daysArray = state.daysArray.map(day => {
    if (day.date === date) {
      day.tasks = payload;
      return day;
    } else {
      return day;
    }
  });

  return {
    ...state,
    daysArray: daysArray
  };
};

const setTask = (state: TimeArrayState, action: any): TimeArrayState => {
  const { payload, date, id } = action;
  let tasks = state.daysArray.filter(day => day.date === date)[0].tasks;

  let task = tasks ? tasks.find(task => task.id === id) : null;

  if (task) {
    tasks.splice(tasks.indexOf(task), 1, payload);
  } else {
    tasks = [...tasks, payload];
  }

  const daysArray = state.daysArray.map(day => {
    if (day.date === date) {
      day.tasks = tasks;
      return day;
    } else {
      return day;
    }
  });

  return {
    ...state,
    daysArray: daysArray
  };
};

const timeArrayReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case DAYS_ARRAY:
      return setDaysArray(state, action);
    case SET_TASKS:
      return setTasks(state, action);
    case SET_TASK:
      return setTask(state, action);
    default:
      return state;
  }
};

export default timeArrayReducers;
