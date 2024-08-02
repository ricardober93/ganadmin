import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from "expo-router";
import Drawer from "expo-router/drawer";
import { StyleSheet } from "react-native";
export default function HomeScreen() {


  return (
    <ContainerView>
      <Drawer.Screen
        options={{
          title: "GanAdmin",             // <== NEW EDIT HERE
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello, Wave!</ThemedText>
        <Link href={"/modal"}>modal</Link>

    
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
