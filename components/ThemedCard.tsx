import { useThemeColor } from "@/hooks/useThemeColor";

import { StyleSheet, View, type ViewProps } from "react-native";
import { Avatar, Card, Chip, MD2Colors } from "react-native-paper";
import { ThemedDotsVertical } from "@/components/ThemedDotsVertical";

export type ThemedCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  title: string;
};

const LeftContent = (props: any) => (
  <Avatar.Icon
    {...props}
    icon="account"
  />
);

export function ThemedCard({ title, style, lightColor, darkColor, ...otherProps }: ThemedCardProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, "background");

  return (
    <Card>
      <Card.Title
        title={title}
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
  );
}

const styles = StyleSheet.create({
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
});
