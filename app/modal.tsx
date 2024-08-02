import { View } from 'react-native';
import { Link, router, Stack } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function Modal() {
  const isPresented = router.canGoBack();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      {!isPresented && <Link href="../">Dismiss</Link>}
      <Stack.Screen
        options={{
          headerBackVisible: true,
          title: "",
          headerTransparent: true,
        }}
      />
      <ThemedText type="subtitle">Que deseas crear</ThemedText>
      
    </View>
  );
}