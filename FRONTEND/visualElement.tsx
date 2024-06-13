import React from 'react';
import { View, Image, ImageSourcePropType, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';

interface VisualElementProps {
  imageSource: ImageSourcePropType;
  lottieSource: any; 
  width?: number;
  height?: number;
  cornerRadius?: number;
  rotationAngle?: number;
}

const VisualElement: React.FC<VisualElementProps> = ({                    // we are using React.FC<visualElementProps> here as -:
  imageSource,                                                             // 1. Using this , typescript will enforce the correct types for thr props reducing runtime errors.
  lottieSource,                                                           //  2.VS code provides better auto completion and documentation hints when types are explicitly defined.
  width = 100,                                                             // 3. It ensures that all required props props are passed correctly, thus improving code realibility and maintainability
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
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  lottie: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});





export default VisualElement;
