import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, ImageBackground } from 'react-native';

const Animations = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const flip = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        // Initial delay
        Animated.delay(500),
        // Fade in the logo
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        // Animate to the top with flipping and scaling down
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: -110, // Increase the upward movement
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(flip, {
            toValue: 2, // Two complete flips (720 degrees)
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 0.72, // Adjust the scale
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
        // Stay at the top for a while
        Animated.delay(1000),
        // Fade out the logo
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    };

    setTimeout(animate, 200); // Initial delay before starting the animation
  }, []);

  const flipInterpolate = flip.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0deg', '360deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.png')} style={styles.background}>
        <Animated.Image
          source={require('./assets/screenlight.png')}
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 800,
    width: 500,
    height: 500,
  },
});

export default Animations;

