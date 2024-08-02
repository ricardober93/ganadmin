import { StyleSheet } from "react-native";

import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack, useRouter } from "expo-router";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";

export default function LoginScreen() {
  const router = useRouter();

  const [text, setText] = useState("");
  const [password, SetPassword] = useState("");

  const login = () => {
    
    router.push("/");
  }
  return (
    <ContainerView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          style={styles.title}
          type="title">
          Iniciar Sesión
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.formContainer}>
        <TextInput
          keyboardType="email-address"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          keyboardType="default"
          secureTextEntry
          textContentType="password"
          label="Password"
          value={password}
          onChangeText={(text) => SetPassword(text)}
        />
        <Link
          href={"/forgot-password"}
          style={styles.forgotPassword}>
          Olvide mi contraseña
        </Link>
      </ThemedView>
      <Button
        icon="login"
        mode="contained"
        onPress={login}>
        Entrar
      </Button>
      <ThemedText
        style={styles.signUp}
        type="default">
        No tienes una cuenta?{" "}
        <Link
          href="/signup"
          style={styles.forgotPassword}>
          Registrate
        </Link>
      </ThemedText>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: "medium",
    margin: "auto",
  },
  formContainer: {
    marginTop: 32,
    marginBottom: 16,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  forgotPassword: {
    alignSelf: "flex-start",
    color: "blue",
  },
  signUp: {
    fontSize: 12,
    alignSelf: "center",
    marginTop: 16,
  },
});
