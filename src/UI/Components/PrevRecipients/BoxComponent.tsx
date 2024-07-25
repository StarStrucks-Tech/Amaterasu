import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, ViewStyle, ImageSourcePropType, TextStyle, Dimensions } from 'react-native';
import AvatarCircle from '../AvatarCircle/index'; 
import { BOX_STYLE, TEXT_STYLE, TEXT_PADDING} from './BoxComponentConstants';

type BoxComponentProps = {
  imageSource: ImageSourcePropType;
  name: string;
  radius: number;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ imageSource, name, radius }) => {
  const [containerWidth, setContainerWidth] = useState<number>(99);

  const handleTextLayout = useCallback((event: any) => {
    const { width } = event.nativeEvent.layout;
    const maxWidth = Dimensions.get('window').width - 40; 
    setContainerWidth(Math.min(maxWidth, width + TEXT_PADDING)); 
  }, []);

 
  return (
    <View style={[BOX_STYLE, { width: containerWidth }]}>
      <AvatarCircle imageSource={imageSource} radius={radius} />
      <Text
        style={TEXT_STYLE}
        numberOfLines={2} 
        ellipsizeMode="tail" 
        onLayout={handleTextLayout} 
      >
        {name}
      </Text>
    </View>
  );
};



export default BoxComponent;