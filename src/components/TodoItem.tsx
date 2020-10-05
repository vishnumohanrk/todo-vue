import { Checkbox, Flex, IconButton } from '@chakra-ui/core';
import React from 'react';

import { ITodo, TTaskAction } from '../models';

export interface TodoItemCompProps {
  item: ITodo;
  taskAction: TTaskAction;
  isLastTab: boolean;
}

const TodoItem: React.FC<TodoItemCompProps> = ({ item, taskAction, isLastTab }) => {
  const toggleItem = () => taskAction(item, 'toggle');

  const deleteItem = () => taskAction(item, 'delete');

  return (
    <Flex justify="space-between">
      <Checkbox
        w="100%"
        isChecked={item.isDone}
        onChange={toggleItem}
        textDecoration={item.isDone && 'line-through'}
        fontWeight={['medium']}
        size="lg"
        py={2}
      >
        {item.name}
      </Checkbox>
      {isLastTab && (
        <IconButton
          aria-label={`Delete ${item.name}`}
          variant="ghost"
          variantColor="gray"
          icon="delete"
          onClick={deleteItem}
        />
      )}
    </Flex>
  );
};

export default TodoItem;
