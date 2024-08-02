import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer
      screenOptions={{ headerShown: false}}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Inicio",
          title: "GanAdmin",
        }}
      />
        <Drawer.Screen
        name="animals"
        options={{
          drawerLabel: "Aniamles",
        }}
      />
    </Drawer>
    </GestureHandlerRootView>
  );
}