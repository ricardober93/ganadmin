import { StyleSheet } from "react-native";

import ContainerView from "@/components/ContainerView";

import { ThemedCard } from "@/components/ThemedCard";
import { ThemedView } from "@/components/ThemedView";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Drawer from "expo-router/drawer";

export default function AnimalsScreen() {
  return (
    <ContainerView>
      <Drawer.Screen
        options={{
          title: "Animales", // <== NEW EDIT HERE
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <ThemedView style={styles.animalesContainer}>
        {[0, 1, 2].map((i) => (
          <ThemedCard
            key={i}
            title={`Animal ${i + 1}`}
          />
        ))}
      </ThemedView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  animalesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
