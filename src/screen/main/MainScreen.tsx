import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Text,
  Surface,
  useTheme,
  Switch,
  Title,
} from 'react-native-paper';

const MainScreen = ({navigation}: {navigation: any}) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Surface style={styles.surface}>
        <Title style={{color: theme.colors.primary}}>
          Welcome to the Main Screen
        </Title>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  surface: {
    padding: 16,
    borderRadius: 8,
    elevation: 4,
  },
});

export default MainScreen;
