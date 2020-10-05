import { Flex, IconButton, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon: 'sun' | 'moon' = colorMode === 'dark' ? 'sun' : 'moon';

  return (
    <Flex as="header" justify="space-between">
      <Text as="h1">Hello</Text>
      <IconButton
        aria-label="Toggle Theme"
        aria-details={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
        icon={icon}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
