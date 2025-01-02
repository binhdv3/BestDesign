import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, useTheme, Switch} from 'react-native-paper';
import {useThemeContext} from '../../hook/useThemeContext';

const SettingsScreen = ({navigation}: {navigation: any}) => {
  const {isDarkMode, toggleTheme} = useThemeContext();
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: 18,
          alignSelf: 'center',
        }}>
        Settings
      </Text>
      <View style={styles.row}>
        <Text style={{color: theme.colors.primary}}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
});

export default SettingsScreen;
