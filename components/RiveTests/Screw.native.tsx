import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import {  useRef, useEffect, useState} from "react";
import { StyleSheet, } from 'react-native';
import Rive, {Fit, RiveEvent, RiveRef} from 'rive-react-native';
export default function Screw () {
    const riveComponentRef = useRef<RiveRef>(null);
  const timer = useRef<NodeJS.Timeout | string>('')

  const [counter, setCounter] = useState(15);
  useEffect(() => {
    riveComponentRef.current?.setInputState(
      'screw',
      'userIsIdle',
      false
    );

  }, [])
  useEffect(() => {
    if(counter > 0) {
      timer.current = setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setIdle()
    }
  }, [counter]);

  const setIdle= () => {
    riveComponentRef.current?.setInputState(
      'screw',
      'userIsIdle',
      true
    );
  };

  const handleStateChanges = (stateMachineName: string, stateName: string) => {
    if(stateName === "Tracking" && counter > 0) {
        console.log("on tracking")
      clearTimeout(timer.current)
    }
  }

  const onEvent = (event: RiveEvent) => {
    console.log("event received", event)

  }

    return (
        <ThemedView style={styles.container}>
          <Rive
          ref={riveComponentRef}
          resourceName="screw6"
          fit={Fit.Cover}
          style={{
  
            width:"100%"
          }}
          stateMachineName="screw"
          onStateChanged={handleStateChanges}
          onRiveEventReceived={onEvent}
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