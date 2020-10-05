import { Text } from '@chakra-ui/core';
import React from 'react';

export interface TabTextCompProps {
  name: string;
}

const TabText: React.FC<TabTextCompProps> = ({ name }) => (
  <Text fontWeight={['semibold']}>{name}</Text>
);

export default TabText;
