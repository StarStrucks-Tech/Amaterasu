import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Nextbuttonstyle from './style';
import Constant from '../../../UI-Constants/Constant.json';

type NextButtonProps = {
    isValidAadhaar: boolean;
    onPressNavigate: any;
  }
const NextButton = (props:NextButtonProps ) => {
  if (props.isValidAadhaar) {
    return (
      <TouchableOpacity onPress={props.onPressNavigate} style={Nextbuttonstyle.nextButton}>
        <Text style={Nextbuttonstyle.nextButtonText}>{Constant.SCREEN_CHANGE_TEXT.NEXT}</Text>
      </TouchableOpacity>
    );
  }
  return null; 
};


export default NextButton;
