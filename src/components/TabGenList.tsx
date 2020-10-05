import { Flex } from '@chakra-ui/core';
import React from 'react';

import { ITodo, TAddTask, TTaskAction } from '../models';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

export interface TabGenListCompProps {
  dataList: ITodo[];
  addNewTask: TAddTask;
  taskAction: TTaskAction;
  isLastTab: boolean;
}

const TabGenList: React.FC<TabGenListCompProps> = props => {
  const { dataList, addNewTask, taskAction, isLastTab } = props;

  return (
    <Flex flexDirection="column">
      {!isLastTab && <InputForm onSubmit={addNewTask} />}
      {dataList.map(i => (
        <TodoItem key={i.id} item={i} taskAction={taskAction} isLastTab={isLastTab} />
      ))}
    </Flex>
  );
};

export default TabGenList;
