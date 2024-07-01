import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../../Screens/ConsentScreens/Style/TermsConditionsStyles';
import { TermsConditionsConstants } from '../../Screens/ConsentScreens/Constants';
import { config } from '../../Screens/ConsentScreens/Config';

const constants = TermsConditionsConstants();
const { TERMS_URL, SECURE_URL } = config;

interface ButtonComponentProps {
  buttonStyle: object;
  imageSource: number;
  buttonText: string;
  url: string;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttonStyle,
  imageSource,
  buttonText,
  url,
}) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={buttonStyle} onPress={handlePress}>
        <Image source={imageSource} style={styles.buttonImage} />
        <Text style={styles.termsSecureButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
