import * as React from 'react';

import { defaultTodos, IToDo } from '../utils';

const useTodo = () => {
  const [tasks, setTasks] = React.useState<IToDo[]>(defaultTodos);

  const id = Math.max(...tasks.map(i => i.id)) + 1;

  React.useEffect(() => {
    const f = localStorage.getItem('tasks');
    const fromStorage = f ? JSON.parse(f) : 'nothing';

    if (fromStorage !== 'nothing') {
      setTasks(fromStorage);
    }
  }, []);

  React.useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  const addNew = (taskName: string) => setTasks([{ id: id > 0 ? id : 0, isDone: false, taskName }, ...tasks]);

  const toggleOne = (id: number) => setTasks(tasks.map(i => (i.id === id ? { ...i, isDone: !i.isDone } : i)));

  const deleteOne = (id: number) => setTasks(tasks.filter(i => i.id !== id));

  const deleteCompleted = () => setTasks(tasks.filter(i => !i.isDone));

  return { tasks, addNew, toggleOne, deleteCompleted, deleteOne };
};

export default useTodo;
