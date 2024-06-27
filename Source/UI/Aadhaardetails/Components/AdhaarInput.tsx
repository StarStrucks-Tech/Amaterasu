
import React from 'react';
import { TextInput, StyleSheet, PixelRatio } from 'react-native';
import AdhaarInputstyle from '../Styles/AdhaarInputstyle';
import Colors from '../../Components/Colors';
const AadhaarInput = ({ aadhaarNumber, setAadhaarNumber }) => {
  
  return (
    <TextInput
      placeholder="Enter Aadhaar Number"
      placeholderTextColor={Colors.aadharidetailsplaceholder}
      style={[AdhaarInputstyle.inbox, { fontSize:  PixelRatio.getPixelSizeForLayoutSize(6), 
        marginTop:PixelRatio.getPixelSizeForLayoutSize(5),
        marginBottom:  PixelRatio.getPixelSizeForLayoutSize(15),  color:Colors.inputtext }]}
      value={aadhaarNumber}
      onChangeText={(value) => setAadhaarNumber(value)}
      keyboardType="numeric"
      maxLength={12} // Limits input to 12 characters
    />
  );
};


export default AadhaarInput;
