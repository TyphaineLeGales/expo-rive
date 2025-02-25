import { ThemedView } from '@/components/ThemedView';
import {  useRef } from "react";
import { StyleSheet, Text } from 'react-native';
import Rive, {Fit, RiveRef} from 'rive-react-native';
export default function CustomRive() {
  const riveComponentRef = useRef<RiveRef>(null);
    return (
        <ThemedView style={styles.container}>
          <Rive
          ref={riveComponentRef}
          resourceName="screw"
          fit={Fit.Cover}
          style={{
            width: "100%",
            height: "100%",
          }}
          stateMachineName="screw"
        />
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