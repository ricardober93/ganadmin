import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import ContainerView from "@/components/ContainerView";
import Drawer from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
export default function AnimalsScreen() {


  return (
    <ContainerView>
    
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Animales, Wave!</ThemedText>


    
      </ThemedView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
