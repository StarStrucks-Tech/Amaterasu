
import React from 'react';
import { TextInput, StyleSheet, PixelRatio } from 'react-native';
import AdhaarInputstyle from './style';
import Constant from '../../../UI-Constants/Constant.json'
const AadhaarInput = ({ aadhaarNumber, setAadhaarNumber }) => {
  
  return (
    <TextInput
      placeholder="Enter Aadhaar Number"
      placeholderTextColor={Constant.Colors.COLOR_GREY_DARK}
      style={[AdhaarInputstyle.inbox, { fontSize:  PixelRatio.getPixelSizeForLayoutSize(6), 
        marginTop:PixelRatio.getPixelSizeForLayoutSize(5),
        marginBottom:  PixelRatio.getPixelSizeForLayoutSize(15),  color:Constant.Colors.GRAY}]}
      value={aadhaarNumber}
      onChangeText={(value) => setAadhaarNumber(value)}
      keyboardType="numeric"
      maxLength={12} 
    />
  );
};


export default AadhaarInput;
