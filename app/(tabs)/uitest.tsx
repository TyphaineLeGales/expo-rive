import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import {  useRef, useEffect, useState} from "react";
import { StyleSheet, } from 'react-native';
import Rive, {Fit, RiveRef} from 'rive-react-native';
export default function CustomRive() {
  const riveComponentRef = useRef<RiveRef>(null);

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    riveComponentRef.current?.setInputState(
      'screw',
      'userIsIdle',
      false
    );

  }, [])
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if(counter === 0) {
      setIdle()
    }
    return () => {
      clearInterval(timer)};
  }, [counter]);

  const setIdle= () => {
    console.log("set idle is called")
    riveComponentRef.current?.setInputState(
      'screw',
      'userIsIdle',
      true
    );
  };

    return (
        <ThemedView style={styles.container}>
          <Rive
          ref={riveComponentRef}
          resourceName="screw4"
          fit={Fit.Cover}
          style={{
  
            width:"100%"
          }}
          stateMachineName="screw"
        />
        <ThemedText type="subtitle">idle count: {counter}</ThemedText>
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