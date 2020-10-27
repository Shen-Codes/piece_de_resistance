import Task from './Task';

export interface Day {
  date: string;
  dayOfWeek: string;
  tasks: [Task];
}

export default function CreateDay(date = new Date().toString()): Day {
  const dayOfWeek = new Date(date).toString(); //use moment

  return {
    date,
    dayOfWeek,
    tasks: []
  };
}
