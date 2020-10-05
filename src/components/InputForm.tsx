import { Button, Flex, Input } from '@chakra-ui/core';
import React, { useState } from 'react';
import shortid from 'shortid';

import { TAddTask } from '../models';

export interface InputFormCompProps {
  onSubmit: TAddTask;
}

const InputForm: React.FC<InputFormCompProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onSubmit({
        name: value,
        isDone: false,
        id: shortid.generate(),
      });
    }
    setValue('');
  };

  return (
    <Flex as="form" onSubmit={handleSubmit} mb={6}>
      <Input
        type="text"
        placeholder="add details"
        aria-label="Add New Task"
        value={value}
        onChange={handleInput}
      />
      <Button type="submit" variant="solid" variantColor="blue">
        Add
      </Button>
    </Flex>
  );
};

export default InputForm;
