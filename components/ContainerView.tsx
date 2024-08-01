import { StyleSheet, type ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";

export default function ContainerView({ children }: ViewProps) {
  return <ThemedView style={styles.container}>{children}</ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
});
