import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screen/main/MainScreen';
import SettingsScreen from '../screen/setting/SettingScreen';
import CustomNavigationBar from './CustomNavigationBar';
import RootDrawerNavigation from './RootDrawerNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Drawer" component={RootDrawerNavigation} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: 'Main Screen'}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          // options={{
          //   header: props => <CustomNavigationBar props={props} />,
          //   headerShown: true,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
