import React, {useRef, useEffect} from 'react';

import { View, Animated, Image, StyleSheet, Button } from 'react-native';
import appLogo from '../../../assets/images/applogo.png';
import styles from './styles';
/**
 * Animations Component
 *
 * This component displays an animated logo using React Native's Animated API.
 * The animation includes fading, translation, scaling, and rotation effects.
 *
 * Animation Description:
 * - The logo starts appearing at the center of the screen.
 * - It then translates along the positive Y-axis.
 * - During the translation, the logo scales down.
 * - The logo also flips continuously during the animation.
 */

// RotatingImage.js


const SplashAnimation = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000, // 2 seconds
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startRotation();
  }, []);

  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotateY: rotateInterpolation }],
  };

  return (
    <View style={styles.container}>
      <Animated.Image 
      source={appLogo} 
      style={[styles.image, animatedStyle]} />

    </View>
  );
};



export default SplashAnimation;
