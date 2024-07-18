
import React from 'react';
import { TextInput, StyleSheet, PixelRatio } from 'react-native';
import AdhaarInputstyle from './style';
import Constant from '../../../UI-Constants/Constant.json';

type AadhaarInputProps = {
    aadhaarNumber: string;
    setAadhaarNumber: React.Dispatch<React.SetStateAction<string>>;
  }
const AadhaarInput = (props : AadhaarInputProps) => {
  
  return (
    <TextInput
      placeholder="Enter Aadhaar Number"
      placeholderTextColor={Constant.Colors.COLOR_GREY_DARK}
      style={[AdhaarInputstyle.inbox, { fontSize:  PixelRatio.getPixelSizeForLayoutSize(6), 
        marginTop:PixelRatio.getPixelSizeForLayoutSize(5),
        marginBottom:  PixelRatio.getPixelSizeForLayoutSize(15),  color:Constant.Colors.GRAY}]}
      value={props.aadhaarNumber}
      onChangeText={(value) => props.setAadhaarNumber(value)}
      keyboardType="numeric"
      maxLength={12} 
    />
  );
};


export default AadhaarInput;
