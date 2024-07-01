import { Image, ImageSourcePropType, View } from 'react-native';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import { styles } from './styles';
import React from 'react';
/**
 * AvatarCircleProps defines the properties required for the Header component.
 * @property {ImageSourcePropType} profileImage - The source of the image.
 * @property {number} Radius - The radius of the avatar circle.
 */
type AvatarCircleProps = {
    radius : number;
    imageSource: ImageSourcePropType;
  };
const AvatarCircle = ({radius,imageSource}:AvatarCircleProps) => {
  const diameter = radius * 2;
  return (
    <View style={[styles.container, { width: diameter, height: diameter }]}>
      <Svg width={diameter} height={diameter} style={styles.svg}>
        <SvgCircle cx={radius} cy={radius} r={radius} fill="none" stroke="black" strokeWidth={1} />
      </Svg>
      <Image
        source={imageSource}
        style={[
          styles.image,
          {
            width: diameter,
            height: diameter,
            borderRadius: radius,
          },
        ]}
      />
    </View>
  );
};
export default AvatarCircle;
