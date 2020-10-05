export interface ITodo {
  name: string;
  isDone: boolean;
  id: string;
}

export type TAddTask = (payload: ITodo) => void;

export type TTaskAction = (payload: ITodo, actionType: 'toggle' | 'delete') => void;
