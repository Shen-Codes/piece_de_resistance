import { v4 as uuidv4 } from 'uuid';

export default interface Task {
  id: string;
  text: string;
  date: string;
}

export function createTask(text: string, date: string): Task {
  const id = uuidv4();

  return {
    id,
    text,
    date
  };
}
