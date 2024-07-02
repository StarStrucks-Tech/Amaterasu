/**
 * A component that renders either an image or a Lottie animation based on the provided source.
 * It also displays a text below the visual element.
 */ 

import React from 'react';
import {View, Image, ImageSourcePropType, Text} from 'react-native';
import LottieView, {AnimationObject} from 'lottie-react-native';
import styles from './styles';


/** 
 * In this we have a general description of what the component does , including details about the props it accepts.
 * @param {VisualElementProps} props - The properties for the component.
 * @param {ImageSourcePropType | LottieSource} props.source - The source for the visual element, can be an image or a Lottie animation.
 * @param {string} props.text - The text to display below the visual element.
 * @param {number} [props.width] - The width of the visual element.
 * @param {number} [props.height] - The height of the visual element.
 * @param {number} [props.cornerRadius] - The corner radius for the image.
 * @param {number} [props.rotationAngle] - The rotation angle for the image.
*/



const VisualElement = (props: VisualElementProps) => {
  const {source, text, width, height, cornerRadius, rotationAngle} = props;


   /* Renders an Image component if the source is identified as an image */
   
  const isImageSource = (source: any): source is ImageSourcePropType => {
    return (
      typeof source === 'number' ||
      (typeof source === 'object' &&
        source.uri &&
        typeof source.uri === 'string' &&
        (source.uri.endsWith('.png') ||
          source.uri.endsWith('.jpg') ||
          source.uri.endsWith('.jpeg')))
    );
  };

  return (
    <View style={styles.container}>
      {isImageSource(source) ? (
        <View style={styles.imageContainer}>
          <Image
            source={source as ImageSourcePropType}
            style={[
              styles.image,
              {
                width,
                height,
                borderRadius: cornerRadius,
                transform: [{rotate: `${rotationAngle ?? 0}deg`}],
              },
            ]}
          />
        </View>
      ) : (

        /*Otherwise, render a LottieView component for animation*/

        <View style={styles.lottieContainer}>
          <LottieView
            source={source as string | AnimationObject | {uri: string}}
            autoPlay
            loop
            style={[styles.lottie, {width, height}]}
          />
        </View>
      )}

      {/* Render a Text component below the visual element */}

      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
type LottieSource = string | {uri: string} | AnimationObject;
type VisualElementProps = {
  source: ImageSourcePropType | LottieSource;
  text: string;
  width?: number;
  height?: number;
  cornerRadius?: number;
  rotationAngle?: number;
};

export default VisualElement;
