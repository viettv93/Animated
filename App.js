import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const App = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;




  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const translateBack = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translateXAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  const translateTo = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translateXAnim, {
      toValue: width - 100,
      duration: 3000
    }).start();
  };

  const translateToTop = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  const translateToBottom = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(translateYAnim, {
      toValue: height - 400,
      duration: 3000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };


  const translateToRandom = () => {
    // Animated.timing(translateYAnim, {
    //   toValue: height - 400,
    //   duration: 3000
    // }).start();

    // setTimeout(() => {
    //   Animated.timing(translateXAnim, {
    //     toValue: width - 100,
    //     duration: 3000
    //   }).start();
    // }, 6000);

    Animated.parallel([
      Animated.timing(translateYAnim, {
        toValue: height - 400,
        duration: 3000
      }),
      Animated.timing(translateXAnim, {
        toValue: width - 100,
        duration: 3000
      })
    ]).start();
  };

  return (
    // <SafeAreaView style={styles.container}>
    //   <Animated.View
    //     style={[
    //       styles.fadingContainer,
    //       {
    //         opacity: 1,
    //         transform: [{translateX: translateXAnim}]
    //       }
    //     ]}
    //   >
    //     <Text style={styles.fadingText}>Fading View!</Text>
    //   </Animated.View>

    //   <View style={styles.buttonRow}>
    //     <Button title="Fade In View" onPress={fadeIn} />
    //     <Button title="Fade Out View" onPress={fadeOut} />
    //     <Button title="Translate back" onPress={translateBack} />
    //   </View>
    // </SafeAreaView>
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            zIndex: 999,
            transform: [{ translateX: translateXAnim }, { translateY: translateYAnim }]
          }}
        >
          <Text style={styles.fadingText}>Red box</Text>
        </Animated.View>
      </View>

      <Button title="Translate back" onPress={translateBack} />
      <Button title="Translate to" onPress={translateTo} />
      <Button title="Translate to Top" onPress={translateToTop} />
      <Button title="Translate bottom" onPress={translateToBottom} />
      <Button title="Translate random" onPress={translateToRandom} />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
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

export default App