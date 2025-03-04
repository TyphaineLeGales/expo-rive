import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import {  useRef, useEffect, useState} from "react";
import { StyleSheet, PanResponder, } from 'react-native';
import Rive, {Fit, RiveEvent, RiveRef} from 'rive-react-native';
export default function Screw () {
    // setting idle render retriggers a render 
    const riveComponentRef = useRef<RiveRef>(null);
    const timer = useRef<NodeJS.Timeout | string>('');
    const touchPosition = useRef({ x: 0, y: 0 })

     // Track touch position
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (event) => {
            const { locationX, locationY } = event.nativeEvent;
            console.log("on pan responder", locationX, locationY)
            touchPosition.current = { x: locationX, y: locationY };
        },
    });
    

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

        if(stateName === "Detecting") {
            console.log("on detecting, position is:", touchPosition.current)
        }

    }

    const onEvent = (event: RiveEvent) => {
        console.log("event received", event)
    }

    return (
        <ThemedView style={styles.container} {...panResponder.panHandlers}>
            <Rive
            ref={riveComponentRef}
            resourceName="screw6"
            fit={Fit.Cover}
            style={{

            width:"100%"
            }}
            stateMachineName="screw_current"
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