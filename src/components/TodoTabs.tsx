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
    <Tabs isFitted variant="line">
      <TabList mb="1em">
        <Tab>
          <TabText name="All" />
        </Tab>
        <Tab>
          <TabText name="Active" />
        </Tab>
        <Tab>
          <TabText name="Completed" />
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <TabGenList dataList={props.datalist} {...props} isLastTab={false} />
        </TabPanel>
        <TabPanel>
          <TabGenList dataList={activeTasks} {...props} isLastTab={false} />
        </TabPanel>
        <TabPanel>
          <TabGenList dataList={completedTasks} {...props} isLastTab={true} />
          <Flex justify="flex-end" mt={5}>
            <Button
              justifySelf="flex-end"
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
