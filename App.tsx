import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import * as customTheme from './src/shared/theme/customTheme';
import {ThemeProvider, useThemeContext} from './src/hook/useThemeContext';

const ThemedApp = () => {
  const {isDarkMode} = useThemeContext();

  return (
    <PaperProvider
      theme={
        isDarkMode ? customTheme.CustomDarkTheme : customTheme.CustomLightTheme
      }>
      <AppNavigator />
    </PaperProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
