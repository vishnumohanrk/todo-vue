export const TabNames = ['All', 'Active', 'Completed'] as const;

export type TTab = typeof TabNames[number];

export interface IToDo {
  taskName: string;
  isDone: boolean;
  id: number;
}

export const defaultTodos: IToDo[] = [
  { id: 0, taskName: 'Task 1', isDone: false },
  { id: 1, taskName: 'Task 2', isDone: true },
];
