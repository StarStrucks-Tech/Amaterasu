import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Dimensions, ImageStyle, ViewStyle } from 'react-native';
import constants from  '../../../../UI-Constants/Constant.json'// Adjusted import path
import styles from './styles';

const { width, height } = Dimensions.get('window');

const Animations: React.FC = () => {
  const opacity = useRef(new Animated.Value(constants.AnimationValues.INITIAL_OPACITY)).current;
  const translateY = useRef(new Animated.Value(constants.AnimationValues.INITIAL_TRANSLATE_Y)).current;
  const scale = useRef(new Animated.Value(constants.AnimationValues.INITIAL_SCALE)).current;
  const flip = useRef(new Animated.Value(constants.AnimationValues.INITIAL_FLIP)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.delay(constants.AnimationDurations.DELAY_BEFORE_START),
        Animated.timing(opacity, {
          toValue: 1,
          duration: constants.AnimationDurations.FADE_IN_DURATION,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: constants.AnimationValues.TRANSLATE_Y_TO_VALUE,
            duration: constants.AnimationDurations.TRANSLATE_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(flip, {
            toValue: constants.AnimationValues.FLIP_TO_VALUE,
            duration: constants.AnimationDurations.SCALE_DURATION,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: constants.AnimationValues.SCALE_TO_VALUE,
            duration: constants.AnimationDurations.SCALE_DURATION,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(constants.AnimationDurations.FADE_OUT_DELAY),
        Animated.timing(opacity, {
          toValue: 0,
          duration: constants.AnimationDurations.FADE_OUT_DURATION,
          useNativeDriver: true,
        }),
      ]).start();
    };

    setTimeout(animate, constants.AnimationDurations.DELAY_BEFORE_START);
  }, []);

  const flipInterpolate = flip.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0deg', '360deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.Image
          source={require('../assets/screenlight.png')}
          style={[
            styles.image,
            {
              opacity,
              transform: [
                { translateY },
                { scale },
                { rotateY: flipInterpolate },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Animations;
