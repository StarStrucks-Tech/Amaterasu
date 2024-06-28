import React from 'react';
import {View, Image, ImageSourcePropType} from 'react-native';
import LottieView, {AnimationObject} from 'lottie-react-native';
import styles from './styles';

type LottieSource = string | {uri: string} | AnimationObject;

const VisualElement: React.FC<{
  imageSource: ImageSourcePropType;
  lottieSource: LottieSource;
  text: string;
  width?: number;
  height?: number;
  cornerRadius?: number;
  rotationAngle?: number;
}> = ({
  imageSource,
  lottieSource,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.lottieContainer}>
        <LottieView
          source={lottieSource as string | AnimationObject | {uri: string}}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
    </View>
  );
};

export default VisualElement;
