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
    <Flex flexDirection={{ base: 'column', md: 'row' }} as="form" onSubmit={handleSubmit} mb={5}>
      <Input
        type="text"
        placeholder="Add details"
        aria-label="Add New Task"
        value={value}
        onChange={handleInput}
        borderRadius="12px"
        w={{ md: 4 / 5 }}
        py={6}
      />
      <Button
        type="submit"
        variant="solid"
        variantColor="blue"
        borderRadius="12px"
        w={{ md: 1 / 5 }}
        py={6}
        ml={{ md: 4 }}
        mt={{ base: 4, md: 0 }}
      >
        Add
      </Button>
    </Flex>
  );
};

export default InputForm;
