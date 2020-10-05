import { Text } from '@chakra-ui/core';
import React from 'react';

export interface TabTextCompProps {
  name: string;
}

const TabText: React.FC<TabTextCompProps> = ({ name }) => <Text>{name}</Text>;

export default TabText;
