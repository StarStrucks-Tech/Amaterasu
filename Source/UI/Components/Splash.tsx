import React, { useState,useEffect } from 'react';
import { View, StyleSheet, Text, Image , BackHandler} from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Splash = () => {
  const translateX = useSharedValue(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [boxDimensions, setBoxDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [circleDimensions, setCircleDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const onSwipe = (value: string) => {
    navigation.navigate('Adhaardetails'); 
  };

  const pan = Gesture.Pan().onChange((event) => {
    const maxOffset = boxDimensions.width - circleDimensions.width - 20;
    if (event.translationX >= 0 && event.translationX <= maxOffset) {
      translateX.value = event.translationX;
    }
  }).onFinalize((event) => {
    const middleOffset = boxDimensions.width / 2 - circleDimensions.width / 2;
    const end = boxDimensions.width - circleDimensions.width - 20;

    if (event.translationX < middleOffset) {
      translateX.value = withSpring(0);
    } else {
      translateX.value = withSpring(end, {}, () => {
        runOnJS(onSwipe)();
      });
    }
  });

  const swipeAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => {
    const end = boxDimensions.width - circleDimensions.width - 20;
    const opacity = interpolate(translateX.value, [0, end], [1, 0]);

    return {
      opacity,
    };
  });

  const getBoxLayout = (event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setBoxDimensions({ x, y, width, height });
  };

  const getCircleLayout = (event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setCircleDimensions({ x, y, width, height });
  };
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      translateX.value = 0; // Reset translateX to initial position
    });

    return unsubscribeFocus;
  }, [navigation]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View onLayout={getBoxLayout} style={styles.box}>
          <GestureDetector gesture={pan}>
            <Animated.View onLayout={getCircleLayout} style={[styles.circle, swipeAnimatedStyle]}>
              <Image
                source={require('../../Assets/image/ss2.png')}
                style={styles.swipeArrowIcons}
              />
            </Animated.View>
          </GestureDetector>
          <Animated.Text
            style={[
              {
                fontFamily: 'Montserrat',
                fontSize: 23,
                color: '#F7F2E8',
                marginLeft: 10,
                textAlign: 'center',
              },
              textAnimatedStyle,
            ]}
          >
            I Understand
          </Animated.Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:"100%",
    height: "100%",
    paddingBottom: 30, // Adjust as needed
  },
  box: {
    flexDirection: 'row',
    width: 330,
    height: 55,
    backgroundColor: '#262123',
    borderWidth: 1,
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: '#000000',
    borderRadius: 15,
    shadowOpacity: 0.1,
  },
  circle: {
    width: '15%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#D05F33',
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeArrowIcons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Splash;
