import { useState } from "react";
import { Divider, IconButton, Menu } from "react-native-paper";

export function ThemedDotsVertical() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <IconButton
          onPress={openMenu}
          icon="dots-vertical"
        />
      }>
      <Menu.Item
        onPress={() => {}}
        title="Item 1"
      />
      <Menu.Item
        onPress={() => {}}
        title="Item 2"
      />
      <Divider />
      <Menu.Item
        onPress={() => {}}
        title="Item 3"
      />
    </Menu>
  );
}
