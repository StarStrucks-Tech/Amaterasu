import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, ViewStyle, ImageSourcePropType, TextStyle, Dimensions } from 'react-native';
import AvatarCircle from '../AvatarCircle/index'; // Ensure the correct import path

interface BoxComponentProps {
  imageSource: ImageSourcePropType;
  name: string;
  radius: number;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ imageSource, name, radius }) => {
  const [containerWidth, setContainerWidth] = useState<number>(99);

  const onTextLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    const maxWidth = Dimensions.get('window').width - 40; // Adjust padding or margins
    setContainerWidth(Math.min(maxWidth, width + 20)); // Adjust width with padding
  };

 
  return (
    <View style={[styles.box, { width: containerWidth }]}>
      <AvatarCircle imageSource={imageSource} radius={radius} />
      <Text
        style={styles.text}
        numberOfLines={2} 
        ellipsizeMode="tail" // Truncate with ellipsis if exceeds numberOfLines
        onLayout={onTextLayout} 
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    borderRadius: 23,
    borderColor: '#7D7A70',
    borderWidth: 1,
    height: 30,
    paddingEnd: 10,
    minWidth: 99
    
  },
  
  text: {
    marginLeft: 10,
    paddingEnd: 10,
    fontSize: 10.98,
    color: '#262123',
    fontWeight: 'bold'
  },
});

export default BoxComponent;