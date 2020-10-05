import { CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
