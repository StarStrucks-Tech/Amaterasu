import React from 'react';
import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

type LottieSource = string | { uri: string } | object;

const VisualElement: React.FC<{
  imageSource: ImageSourcePropType;      // Image source
  lottieSource: LottieSource;            // Lottie Source
  width?: number;                        // defining width
  height?: number;                       // defining height
  cornerRadius?: number;                 // definig cornerRadius
  rotationAngle?: number;                // definibg rotationAngle
}> = ({
  imageSource,
  lottieSource,
  width = 100,
  height = 100,
  cornerRadius = 10,
  rotationAngle = 0,
}) => {
  return (
    <Animated.View
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius: cornerRadius,
          transform: [{ rotate: `${rotationAngle}deg` }],
        },
      ]}
    >
      <Image source={imageSource} style={styles.image} />
      <LottieView source={lottieSource} autoPlay loop style={styles.lottie} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  lottie: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default VisualElement;
