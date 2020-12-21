import NextHead from 'next/head';
import * as React from 'react';

import AppForm from '../components/AppForm';
import AppTabs from '../components/AppTabs';
import DelBtn from '../components/DeleteBtn';
import ToDoItem from '../components/ToDoItem';
import useTodo from '../hooks/useTodo';
import { TTab } from '../utils';

const AppHome = () => {
  const [activeTab, setActiveTab] = React.useState<TTab>('All');
  const { addNew, deleteCompleted, deleteOne, tasks, toggleOne } = useTodo();

  const tasksToDisplay =
    activeTab === 'Active'
      ? tasks.filter(i => !i.isDone)
      : activeTab === 'Completed'
      ? tasks.filter(i => i.isDone)
      : tasks;

  return (
    <>
      <NextHead>
        <title>ToDo</title>
        <meta name="description" content="ToDo App Using Next/Tailwind - Vishnumohan R K" />
      </NextHead>

      <header>
        <h1 className="text-center text-3xl font-bold my-5">#todo</h1>
        <AppTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab !== 'Completed' ? <AppForm submitCallback={addNew} /> : null}
        <div className="flex flex-col space-y-5">
          {tasksToDisplay.map(i => (
            <ToDoItem
              {...i}
              shouldShowDelBtn={activeTab === 'Completed'}
              deleteOne={deleteOne}
              toggleOne={toggleOne}
              key={i.id}
            />
          ))}
        </div>
        {activeTab === 'Completed' ? (
          <DelBtn shouldDisable={tasksToDisplay.length === 0} onPress={deleteCompleted} />
        ) : null}
      </header>
    </>
  );
};

export default AppHome;
