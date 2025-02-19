import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text } from 'react-native';
export default function CustomRive() {
    return (
        <ThemedView style={styles.container}>
            <Text>Test custom animation</Text>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});