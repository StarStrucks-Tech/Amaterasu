import { Image, ImageSourcePropType, View } from 'react-native';
import Svg, { Circle as SvgCircle } from 'react-native-svg';
import { styles } from './styles';
interface CircleProps {
    radius: number; // The radius of the circle
    imageSource: ImageSourcePropType; // The image source, which can be a local image or a URL
  }
const AvatarCircle: React.FC<CircleProps> = ({ radius, imageSource }) => {
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
