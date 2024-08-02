import { StyleSheet, View } from "react-native";

import ContainerView from "@/components/ContainerView";
import { ThemedDotsVertical } from "@/components/ThemedDotsVertical";
import { ThemedView } from "@/components/ThemedView";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Drawer from "expo-router/drawer";
import { Avatar, Card, Chip, MD2Colors } from "react-native-paper";

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
              right={() => <ThemedDotsVertical />}
            />
            <Card.Content>
              <View>
                <Chip
                  style={styles.chip}
                  icon="information">
                  Becerra
                </Chip>
                <Chip
                  style={[styles.chipBadge, styles.green]}
                  onPress={() => console.log("Pressed")}
                  compact
                  theme={{ colors: { primary: "green" } }}>
                  Inventariada
                </Chip>
              </View>
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
    width: "auto",
    maxWidth: 120,
  },
  chipBadge: {
    position: "absolute",
    right: -16,
    bottom: -16,
  },
  green: {
    backgroundColor: MD2Colors.green100,
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
