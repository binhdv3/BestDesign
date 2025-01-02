import MainScreen from '../screen/main/MainScreen';
import SettingsScreen from '../screen/setting/SettingScreen';
import {Text, BottomNavigation} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CommonActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabBottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({navigation, state, descriptors, insets}) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({route, preventDefault}) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({route, focused, color}) => {
            const {options} = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({focused, color, size: 24});
            }

            return null;
          }}
          getLabelText={({route}) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel.toString()
                : options.title !== undefined
                ? options.title
                : route.name;

            return label;
          }}
        />
      )}>
      <Tab.Screen name="Main" component={MainScreen} key={'Main'} />
      <Tab.Screen name="Settings" component={SettingsScreen} key={'Settings'} />
    </Tab.Navigator>
  );
};

export default TabBottomNavigation;
