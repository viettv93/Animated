import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Button, SafeAreaView, Text, Easing, Slider } from "react-native";

const Rotate = () => {
    // fadeAnim will be used as the value for opacity. Initial Value: 0
    const rotateAnim = useRef(new Animated.Value(0)).current;
    var isPlaying = false;

    const anim = useRef(Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
    })).current;


    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
    })
    const rotatePlay = () => {
        isPlaying = true;
        startAnim();

        // anim.start();

    };

    const startAnim = () => {
        anim.start((result) => {
            if (isPlaying == true) {
                console.log('PLAYING')
                rotateAnim.setValue(0);
                startAnim();
            } else {
                // rotateAnim.setValue(0);
                console.log('STOP')
                anim.stop();
            }
        });

    }

    const rotatePause = () => {
        isPlaying = false
        anim.stop();
    }

    const rotateStop = () => {
        rotateAnim.setValue(0)
        isPlaying = false
        anim.stop();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[styles.images, {
                    transform: [{ rotate: rotate }]
                }]} >
                <Animated.Text>ALALALLA</Animated.Text>
            </Animated.View>
            <Button title="play" onPress={rotatePlay} />
            <Button title="pause" onPress={rotatePause} />
            <Button title="Stop" onPress={rotateStop} />

            <Slider
                onSlidingComplete={(value) => {
                    console.log(value)
                }}
                value={0}
                maximumValue={150}
                thumbTintColor={'red'}
                style={{ width: 300 }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    images: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16,

    }
});

export default Rotate;