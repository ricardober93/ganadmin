import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default function ForGotScreen() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const resetPassword = () => {
    console.log(email);
    router.push("/verification-code");
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
          Forgot Password
        </ThemedText>

        <ThemedText
          type="default"
          style={styles.description}>
          No worries, you just need to type your email address or username and we will send the verification code.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.formContainer}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button
          icon="security"
          mode="contained"
          onPress={resetPassword}>
          Resetar la contraseña
        </Button>
      </ThemedView>
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
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});
