import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Dimensions } from "react-native"


const width = Dimensions.get("screen").width
const Entry = () => {

    const opacityAnim = useRef(new Animated.Value(1)).current;
    const transportToXAnim = useRef(new Animated.Value(0)).current;

    const rightAndOpacityOut = () => {

        Animated.parallel([
            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 3000
            }),
            Animated.timing(transportToXAnim, {
                toValue: width,
                duration: 3000
            })
        ]).start()
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                        opacity: opacityAnim,
                        transform: [{ translateX: transportToXAnim },]
                    }
                ]}
            >
                <Text style={styles.fadingText}>Box</Text>
            </Animated.View>
            <View style={styles.buttonRow}>

                <Button title="Box red" onPress={rightAndOpacityOut} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "red",
        width: 100,
        height: 100
    },
    fadingText: {
        fontSize: 28
    },
    buttonRow: {
        flexBasis: 100,
        justifyContent: "space-evenly",
        marginVertical: 16
    }
});

export default Entry;