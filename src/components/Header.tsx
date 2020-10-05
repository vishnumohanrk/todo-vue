import { Text } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => (
  <Text as="h1" textAlign="center" fontSize={['4xl']} fontWeight={['bold']} color="#333333" my={5}>
    #todo
  </Text>
);

export default Header;
