import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../../Screens/ConsentScreens/TermsConditions/styles';

type IconTextClickableComponentProps = {
  buttonStyle: object;
  imageSource: number;
  buttonText: string;
  url: string;
}

export const IconTextClickableComponent = (props:IconTextClickableComponentProps) => {
  const handlePress = () => {
    Linking.openURL(props.url);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={props.buttonStyle} onPress={handlePress}>
        <Image source={props.imageSource} style={styles.buttonImage} />
        <Text style={styles.termsSecureButtonText}>{props.buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
