import { StyleSheet } from 'react-native';

import ContainerView from '@/components/ContainerView';
import { ThemedText } from '@/components/ThemedText';

export default function TabTwoScreen() {
  return (
    <ContainerView>
   <ThemedText type="title">Settings</ThemedText>

    </ContainerView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
