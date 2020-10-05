import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/core';
import React from 'react';

import { ITodo, TAddTask, TTaskAction } from '../models';
import TabGenList from './TabGenList';
import TabText from './TabText';

export interface TodoTabsCompProps {
  datalist: ITodo[];
  addNewTask: TAddTask;
  taskAction: TTaskAction;
  deleteAll: () => void;
}

const TodoTabs: React.FC<TodoTabsCompProps> = props => {
  const completedTasks = props.datalist.filter(i => i.isDone);
  const activeTasks = props.datalist.filter(i => !i.isDone);

  return (
    <Tabs isFitted variant="line" variantColor="blue">
      <TabList mb={6}>
        <Tab borderBottomWidth={4}>
          <TabText name="All" />
        </Tab>
        <Tab borderBottomWidth={4}>
          <TabText name="Active" />
        </Tab>
        <Tab borderBottomWidth={4}>
          <TabText name="Completed" />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel mb={6}>
          <TabGenList dataList={props.datalist} {...props} isLastTab={false} />
        </TabPanel>
        <TabPanel mb={6}>
          <TabGenList dataList={activeTasks} {...props} isLastTab={false} />
        </TabPanel>
        <TabPanel mb={6}>
          <TabGenList dataList={completedTasks} {...props} isLastTab={true} />
          <Flex justify="flex-end" mt={5}>
            <Button
              variantColor="red"
              leftIcon="delete"
              onClick={props.deleteAll}
              isDisabled={completedTasks.length === 0}
            >
              Delete All
            </Button>
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TodoTabs;
