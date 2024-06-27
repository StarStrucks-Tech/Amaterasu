import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, PixelRatio } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import splashstyles from '../Styles/Splashstyle';
import Colors from '../../Components/Colors';
import TextComponent from '../../Components/Textcomponents';

const Splash = () => {
  const translateX = useSharedValue(0);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [boxDimensions, setBoxDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [circleDimensions, setCircleDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const onSwipe = () => {
    navigation.navigate('Adhaardetails')
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
      <View style={splashstyles.container}>
        <View onLayout={getBoxLayout} style={splashstyles.box}>
          <GestureDetector gesture={pan}>
            <Animated.View onLayout={getCircleLayout} style={[splashstyles.circle, swipeAnimatedStyle]}>
              <Image
                source={require('../../../Assets/image/ss2.png')}
                style={splashstyles.swipeArrowIcons}
              />
            </Animated.View>
          </GestureDetector>
          <Animated.Text
            style={[
              {
                fontFamily: 'Montserrat',
                fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
                color: Colors.splashcolor,
                marginLeft: PixelRatio.getPixelSizeForLayoutSize(3.33),
                textAlign: 'center',
              },
              textAnimatedStyle,
            ]}
          >{TextComponent.Splashtext}
          </Animated.Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Splash;
