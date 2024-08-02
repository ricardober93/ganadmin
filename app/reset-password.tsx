import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, useRouter } from "expo-router";
import { createRef, useState } from "react";
import { StyleSheet, type TextInput as TextInputType } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function VerificationCode() {
  const router = useRouter();

  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfirmPassword] = useState("");

  const resetPassword = () => {
    console.log(password, confirmPassword);
    router.push("/login");
  };

  return (
    <ContainerView>
      <Stack.Screen
        options={{
          headerBackVisible: true,
          title: "",
          headerTransparent: true,
        }}
      />
      <ThemedView style={styles.Container}>
        <ThemedText
          type="title"
          style={styles.title}>
          Crear  contraseña
        </ThemedText>

        <ThemedText
          type="default"
          style={styles.description}>
          Crea una nueva contraseña para el login
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.formContainer}>
        <TextInput
          keyboardType="email-address"
          label="Email"
          value={password}
          onChangeText={(text) => SetPassword(text)}
        />
        <TextInput
          keyboardType="default"
          secureTextEntry
          textContentType="password"
          label="ConfirmPassword"
          value={confirmPassword}
          onChangeText={(text) => SetConfirmPassword(text)}
        />
      </ThemedView>
      <Button
        mode="contained"
        onPress={resetPassword}
        style={{ marginTop: 16 }}>
        Crear contraseña
      </Button>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 64,
  },
  title: {
    fontSize: 20,
    fontWeight: "medium",
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    color: "gray",
  },
  formContainer: {
    width: "100%",
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 16,
  },
});
