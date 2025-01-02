import React from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

interface CustomNavigationBarProps {
  props: NativeStackHeaderProps;
}

const CustomNavigationBar: React.FC<CustomNavigationBarProps> = props => {
  const {back, navigation, options, route} = props.props;

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
        <Menu.Item
          onPress={() => {
            console.log('Option 1 was pressed');
          }}
          title="Option 1"
          key={1}
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 2 was pressed');
          }}
          title="Option 2"
          key={2}
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 3 was pressed');
          }}
          title="Option 3"
          key={3}
        />
      </Menu>
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
