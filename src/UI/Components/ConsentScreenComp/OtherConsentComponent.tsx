import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../Screens/ConsentScreens/Style/OtherConsentStyles';
import { OtherConsentsConstants } from '../../Screens/ConsentScreens/Constants';

const constants = OtherConsentsConstants();

interface ConsentComponentProps {
  containerStyle: object;
  imageSource: number;
  headerText: string;
  text: string;
}

export const ConsentComponent: React.FC<ConsentComponentProps> = ({
  containerStyle,
  imageSource,
  headerText,
  text,
}) => {
  return (
    <View style={containerStyle}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.header}>{headerText}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
