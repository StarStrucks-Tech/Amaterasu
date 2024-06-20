// OTPInputs.tsx

import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from 'react-native';
<<<<<<< HEAD
import OTPInputstyle from "./Styles/OTPInputstyle";
=======

>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
const OTPInputs = ({ otp, handleOtpChange, isChecked }) => {
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1) {
      handleOtpChange(index, value);
      // Move focus to the next input field after entering a digit
      if (value.length === 1 && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
<<<<<<< HEAD
    <View style={OTPInputstyle.otpContainer}>
=======
    <View style={styles.otpContainer}>
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => inputRefs.current[index] = ref}
          placeholder=""
          placeholderTextColor='#7E7E7E'
<<<<<<< HEAD
          style={OTPInputstyle.inbox}
=======
          style={styles.inbox}
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
          value={digit}
          onChangeText={(value) => handleInputChange(index, value)}
          keyboardType="numeric"
          maxLength={1}
          secureTextEntry={!isChecked}
        />
      ))}
    </View>
  );
};

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60
  },
  inbox: {
    borderBottomColor: '#7E7E7E',
    borderBottomWidth: 3,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 30, // Adjust width as needed to accommodate each digit
    height: 40, // Ensure consistent height for uniform appearance
    marginHorizontal: 5, // Adjust spacing between TextInput components
    color: 'black',
    textAlign: 'center'
  }
});
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f

export default OTPInputs;
