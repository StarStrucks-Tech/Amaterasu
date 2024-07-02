import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const Animations = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const flip = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.delay(500),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: -110, 
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(flip, {
            toValue: 2, 
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 0.72, 
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(1000),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    };

    setTimeout(animate, 200); 
  }, []);

  const flipInterpolate = flip.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['0deg', '360deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.background}>
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
      </View>
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
    marginTop: height*-0.1,
    width: width*1,
    height: height*0.6,
  },
});

export default Animations;

