import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Nextbuttonstyle from './Styles/Nextbuttonstyle';
const NextButton = ({ isValidAadhaar, isChecked, onPress }) => {
  if (isValidAadhaar && isChecked) {
    return (
      <TouchableOpacity onPress={onPress} style={Nextbuttonstyle.nextButton}>
        <Text style={Nextbuttonstyle.nextButtonText}>Next</Text>
      </TouchableOpacity>
    );
  }
  return null; // Return null if conditions are not met
};


export default NextButton;
