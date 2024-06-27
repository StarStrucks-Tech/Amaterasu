import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import nextButtonStyles from '../Styles/nextButtonstyle1';
import { useNavigation } from '@react-navigation/native';
import TextComponent from '../../Components/Textcomponents';

const NextButtonotp = ({ onPress, disabled }) => {
  const buttonStyle = disabled ? nextButtonStyles.uncheckedButton : nextButtonStyles.checkedButton;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[nextButtonStyles.verifyOtpbtn, buttonStyle]}
      onPress={() => { navigation.navigate("LoadingScreen") }}
    >
      <Text style={nextButtonStyles.btnTxt}>{TextComponent.Next}</Text>
    </TouchableOpacity>
  );
};

export default NextButtonotp;
