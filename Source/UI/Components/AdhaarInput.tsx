
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import AdhaarInputstyle from './Styles/AdhaarInputstyle';
const AadhaarInput = ({ aadhaar_number, setAadhaarNumber }) => {
  return (
    <TextInput
      placeholder="Enter Aadhaar Number"
      placeholderTextColor='#7E7E7E'
      style={[AdhaarInputstyle.inbox, { fontSize: 16, marginBottom: 50, marginTop: -40 }]}
      value={aadhaar_number}
      onChangeText={(value) => setAadhaarNumber(value)}
      keyboardType="numeric"
      maxLength={12} // Limits input to 12 characters
    />
  );
};


export default AadhaarInput;
