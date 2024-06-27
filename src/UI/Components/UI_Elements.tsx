import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import Svg, { Circle as SvgCircle } from 'react-native-svg';

interface CircleProps {
  radius: number;
  imageSource: ImageSourcePropType;
}
/**
 * Props for the Circle component.
 * @typedef {Object} CircleProps
 * @property {number} radius - The radius of the circle.
 * @property {ImageSourcePropType} imageSource - The image source, which can be a local image or a URL.
 */

/**
 * Circle component that displays an image within a circular frame.
 * 
 * @param {CircleProps} props - Props for the Circle component.
 * @returns {JSX.Element} A circle component with an image inside.
 */
const Circle: React.FC<CircleProps> = ({ radius, imageSource }) => {
  const diameter = radius * 2;

  return (
    <View style={{ width: diameter, height: diameter, position: 'relative' }}>
      <Svg width={diameter} height={diameter} style={styles.svg}>
        <SvgCircle cx={radius} cy={radius} r={radius} fill="none" stroke="black" strokeWidth={1} />
      </Svg>
      <Image
        source={imageSource}
        style={{
          width: diameter,
          height: diameter,
          borderRadius: radius,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  svg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Circle;