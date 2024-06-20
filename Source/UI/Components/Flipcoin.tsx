import React, { useEffect, useRef } from "react";
import { Animated, SafeAreaView, StyleSheet } from 'react-native';
import Flipcoinstyle from "./Styles/Flipcoinstyle";
const Flipcoin = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startFlipAnimation = () => {
    animatedValue.setValue(0); // Reset the animated value
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 180,
          duration: 1000, // Duration of 1 second to flip to 180 degrees
          useNativeDriver: true
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000, // Duration of 1 second to flip back to 0 degrees
          useNativeDriver: true
        })
      ])
    ).start();
  };

  useEffect(() => {
    startFlipAnimation();
  }, []);

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  });

  const rotateYAnimatedStyle = {
    transform: [{ rotateY: setInterpolate }]
  };

  return (
    <SafeAreaView>
      <Animated.Image
        source={require('../../Assets/image/logo.png')}
        style={[rotateYAnimatedStyle, Flipcoinstyle.imagsp]}
      />
    </SafeAreaView>
  );
};


export default Flipcoin;
