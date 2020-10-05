import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';

import Header from '../src/components/Header';
import TodoTabs from '../src/components/TodoTabs';
import BaseLayout from '../src/layouts/BaseLayout';
import { ITodo, TAddTask, TTaskAction } from '../src/models';

const defaultTasks: ITodo[] = [
  { name: 'Task 1', isDone: false, id: shortid.generate() },
  { name: 'Task 2', isDone: false, id: shortid.generate() },
];

const AppHome: React.FC = () => {
  const [tasks, setTasks] = useState<ITodo[]>(defaultTasks);

  const deleteAll = () => setTasks(tasks.filter(i => !i.isDone));

  const addNewTask: TAddTask = payload => setTasks([payload, ...tasks]);

  const taskAction: TTaskAction = (payload, action) =>
    action === 'delete'
      ? setTasks(tasks.filter(i => i.id !== payload.id))
      : setTasks(tasks.map(i => ({ ...i, isDone: i.id === payload.id ? !i.isDone : i.isDone })));

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || defaultTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ToDo App - DEV Challenges</title>
        <meta name="description" content="DEV Challenges.io - ToDo App - By Vishnumohan R K" />
      </Head>

      <BaseLayout>
        <Header />
        <TodoTabs
          taskAction={taskAction}
          addNewTask={addNewTask}
          datalist={tasks}
          deleteAll={deleteAll}
        />
      </BaseLayout>
    </>
  );
};

export default AppHome;
