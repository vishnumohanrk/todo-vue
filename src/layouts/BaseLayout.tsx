import { Flex } from '@chakra-ui/core';
import React from 'react';

export interface BaseLayoutCompProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutCompProps> = ({ children }) => (
  <Flex as="main" flexDirection="column" maxW={'lg'} minH="100vh" px={4} mx="auto">
    {children}
  </Flex>
);

export default BaseLayout;
