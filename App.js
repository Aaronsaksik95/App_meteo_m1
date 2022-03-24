import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './src/config/theme'
import { StyleSheet, useColorScheme } from 'react-native';
import Routes from './src/routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Routes/>
    </ThemeProvider>
  );
};

export default App;