import React, {useRef, useEffect} from 'react';
import {Animated, View, Dimensions} from 'react-native';
import constants from '../../../UI-Constants/Constant.json';
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

const SplashAnimation = () => {
  // Create animated values for opacity, translation, scale, and flip (rotation)
  const opacity = useRef(
    new Animated.Value(constants.AnimationValues.INITIAL_OPACITY),
  ).current;
  const translateY = useRef(
    new Animated.Value(constants.AnimationValues.INITIAL_TRANSLATE_Y),
  ).current;
  const scale = useRef(
    new Animated.Value(constants.AnimationValues.INITIAL_SCALE),
  ).current;
  const flip = useRef(
    new Animated.Value(constants.AnimationValues.INITIAL_FLIP),
  ).current;

  // useEffect hook to start the animation when the component mounts
  useEffect(() => {
    // Define the animation sequence
    const animate = () => {
      Animated.sequence([
        // Delay before starting the animation
        Animated.delay(constants.AnimationValues.DELAY_BEFORE_START),
        // Fade in the logo
        Animated.timing(opacity, {
          toValue: 1,
          duration: constants.AnimationValues.FADE_IN_DURATION,
          useNativeDriver: true,
        }),
        // Perform translation, scaling, and flipping simultaneously
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: constants.AnimationValues.TRANSLATE_Y_TO_VALUE,
            duration: constants.AnimationValues.TRANSLATE_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(flip, {
            toValue: constants.AnimationValues.FLIP_TO_VALUE,
            duration: constants.AnimationValues.SCALE_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: constants.AnimationValues.SCALE_TO_VALUE,
            duration: constants.AnimationValues.SCALE_DURATION,
            useNativeDriver: true,
          }),
        ]),
        // Delay before starting the fade-out animation
        Animated.delay(constants.AnimationValues.FADE_OUT_DELAY),
        // Fade out the logo
        Animated.timing(opacity, {
          toValue: 0,
          duration: constants.AnimationValues.FADE_OUT_DURATION,
          useNativeDriver: true,
        }),
      ]).start(); // Start the animation sequence
    };

    // Start the animation after an initial delay
    setTimeout(animate, constants.AnimationValues.DELAY_BEFORE_START);
  }, []);

  // Interpolate the flip value to rotate the logo from 0 to 720 degrees
  const flipInterpolate = flip.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0deg', '360deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        {/* Animated Image with opacity, translation, scale, and rotation */}
        <Animated.Image
          source={require('../../../Assets/images/applogo.png')}
          style={[
            styles.image,
            {
              opacity,
              transform: [{translateY}, {scale}, {rotateY: flipInterpolate}],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SplashAnimation;
