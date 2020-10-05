import React, { useState } from 'react';
import shortid from 'shortid';

import Header from '../src/components/Header';
import TodoTabs from '../src/components/TodoTabs';
import BaseLayout from '../src/layouts/BaseLayout';
import { ITodo, TAddTask, TTaskAction } from '../src/models';

const AppHome: React.FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>([
    { name: 'Task 1', isDone: false, id: shortid.generate() },
    { name: 'Task 2', isDone: false, id: shortid.generate() },
  ]);

  const deleteAll = () => setTasks(tasks.filter(i => !i.isDone));

  const addNewTask: TAddTask = payload => setTasks([payload, ...tasks]);

  const taskAction: TTaskAction = (payload, action) =>
    action === 'delete'
      ? setTasks(tasks.filter(i => i.id !== payload.id))
      : setTasks(tasks.map(i => ({ ...i, isDone: i.id === payload.id ? !i.isDone : i.isDone })));

  return (
    <BaseLayout>
      <Header />
      <TodoTabs
        taskAction={taskAction}
        addNewTask={addNewTask}
        datalist={tasks}
        deleteAll={deleteAll}
      />
    </BaseLayout>
  );
};

export default AppHome;
