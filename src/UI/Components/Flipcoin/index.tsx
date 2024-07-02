import React, {useEffect, useRef} from 'react';
import {Animated, View} from 'react-native';
import styles from './styles';

/**
 * Flipcoin Component
 */
const Flipcoin = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  /**
   * Starts the flip animation.
   * Creates an infinite loop of flipping the coin 180 degrees and back.
   */
  const startFlipAnimation = () => {
    animatedValue.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 180,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startFlipAnimation();
  }, []);

  /**
   * Interpolation for mapping the animated value to rotation degrees.
   */
  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  /**
   * Style object for applying the rotation transform to the image.
   */
  const rotateYAnimatedStyle = {
    transform: [{rotateY: setInterpolate}],
  };

  return (
    <View>
      <Animated.Image
        source={require('../../../Assets/logo.svg')}
        style={[rotateYAnimatedStyle, styles.logosize]}
      />
    </View>
  );
};

export default Flipcoin;
