/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useCallback} from 'react';
import {Animated, SafeAreaView, StyleSheet, PixelRatio} from 'react-native';

const Flipcoin = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startFlipAnimation = useCallback(() => {
    animatedValue.setValue(0); // Reset the animated value
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 180,
          duration: 1000, // Duration of 1 second to flip to 180 degrees
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000, // Duration of 1 second to flip back to 0 degrees
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [animatedValue]);

  useEffect(() => {
    startFlipAnimation();
  }, [startFlipAnimation]);

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [{rotateY: setInterpolate}],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require('../Screens/AadhaarDetailScreen/assests/KubairLogo.png')} // Update the path to your image
        style={[rotateYAnimatedStyle, styles.image]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop:PixelRatio.getPixelSizeForLayoutSize(10),
    height:PixelRatio.getPixelSizeForLayoutSize(25),
    width: PixelRatio.getPixelSizeForLayoutSize(33),
    marginBottom:PixelRatio.getPixelSizeForLayoutSize(10)
  },
});

export default Flipcoin;
