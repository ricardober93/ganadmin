import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import ContainerView from "@/components/ContainerView";
import Drawer from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Avatar, Button, Card, Chip, Divider, IconButton, Menu, Text } from "react-native-paper";
import { useState } from "react";
import { ThemedDotsVertical } from "@/components/ThemedDotsVertical";

const LeftContent = (props: any) => (
  <Avatar.Icon
    {...props}
    icon="account"
  />
);

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
          <Card key={i}>
            <Card.Title
              title={i + 1}
              subtitle="Marcelanita"
              left={LeftContent}
              right={() => <ThemedDotsVertical /> }
              
            />
            <Card.Content>
              <Chip style={styles.chip} icon="information">Becerra</Chip>
            </Card.Content>
          </Card>
        ))}
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
  chip: {
    width:"auto",
    maxWidth: 120,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  animalesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
