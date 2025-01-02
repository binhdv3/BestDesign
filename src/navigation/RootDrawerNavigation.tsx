import * as React from 'react';
import {Drawer, useTheme} from 'react-native-paper';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import TabBottomNavigation from './TabBottomNavigation';

const DrawerNav = createDrawerNavigator();

const RootDrawerNavigation = () => {
  const [active, setActive] = React.useState('');
  const theme = useTheme();

  console.log(theme.colors.onBackground);

  return (
    <DrawerNav.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => {
        return (
          <DrawerContentScrollView
            {...props}
            style={{backgroundColor: theme.colors.surface}}>
            <Drawer.Section title="Best Design">
              <Drawer.Item
                label="Main"
                active={active === 'first'}
                onPress={() => setActive('first')}
              />
              <Drawer.Item
                label="Settings"
                active={active === 'second'}
                onPress={() => setActive('second')}
              />
            </Drawer.Section>
          </DrawerContentScrollView>
        );
      }}>
      <DrawerNav.Screen name="RootTab" component={TabBottomNavigation} />
    </DrawerNav.Navigator>
  );
};

export default RootDrawerNavigation;
