import ContainerView from "@/components/ContainerView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, useRouter } from "expo-router";
import { createRef,  useState } from "react";
import { StyleSheet, type TextInput as TextInputType } from "react-native";
import { Button, TextInput,  } from "react-native-paper";

export default function VerificationCode() {
  const router = useRouter();

  const [verificationCode, setVerificationCode] = useState("");
  const [inputRefs] = useState(Array.from({ length: 4 }, () => createRef< TextInputType >()));

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = verificationCode.slice(0, index) + value + verificationCode.slice(index + 1);
    setVerificationCode(updatedCode);
    if (value && inputRefs[index + 1]?.current) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleVerifyCode = () => {
    console.log(verificationCode);
    router.push("/");
  };

  const handleResendCode = () => {
    console.log("Resend code");
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
          Enter verification code
        </ThemedText>

        <ThemedText
          type="default"
          style={styles.description}>
          Enter the verification code we sent to your email
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.formContainer}>
        {Array.from({ length: 4 }, (_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardAppearance="dark"
            keyboardType="number-pad"
            value={verificationCode[index]}
            ref={inputRefs[index]}
            maxLength={1}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        ))}
      </ThemedView>
      <Button
        mode="contained"
        onPress={handleVerifyCode}>
        Verify
      </Button>
      <ThemedText
        type="link"
        onPress={handleResendCode}
        style={styles.resendCode}>
        Resend code
      </ThemedText>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  input: {
    width: 42,
    height: 42,
  },
  resendCode: {
    marginTop: 16,
    alignSelf: "center",
    color: "blue",
  },
});
