import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AadhaarInput from "../Components/AdhaarInput";
import NextButton from "../Components/NextButton";
import SecureComp from "../Components/SecureComp";
import { adhaardetailsScreenStyles } from "../Components/Styles/adhaardetailsScreenStyles"; 

const Adhaardetails = ({ navigation }) => {
  const [aadhaar_number, setAadhaarNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const isValidAadhaar = (input) => {
    return /^\d{12}$/.test(input); 
  };

  return (
    <View style={adhaardetailsScreenStyles.container}>
      <Image
        source={require('../../Assets/image/AAVerification.png')}
        style={adhaardetailsScreenStyles.imageStyle}
        resizeMode="contain"
      />
      <Text style={adhaardetailsScreenStyles.signupText}>Enter your Aadhaar details</Text>

      <AadhaarInput
        aadhaar_number={aadhaar_number}
        setAadhaarNumber={setAadhaarNumber}
      />

      <SecureComp />

      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={adhaardetailsScreenStyles.consentContainer}
      >
        <View style={[adhaardetailsScreenStyles.radioCircle, isChecked && adhaardetailsScreenStyles.checkedRadioCircle]}>
          {isChecked && (
            <Image
              source={require('../../Assets/image/right.png')}
              style={adhaardetailsScreenStyles.checkIcon}
            />
          )}
        </View>
        <View >
          <Text style={adhaardetailsScreenStyles.radioText}>I voluntarily provide my Aadhaar number and </Text>
          <Text style={adhaardetailsScreenStyles.radioText}>provide my consent to Bank to obtain</Text>
          <Text style={adhaardetailsScreenStyles.radioText}>my aadhaar details from UIDAI for establishing</Text>
          <Text style={adhaardetailsScreenStyles.radioText}>my identity.</Text>
        </View>
      </TouchableOpacity>

      <NextButton
        isValidAadhaar={isValidAadhaar(aadhaar_number)}
        isChecked={isChecked}
        onPress={() => navigation.navigate("AdhaarOTPdetail")}
      />
    </View>
  );
};

export default Adhaardetails;
