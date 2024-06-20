// OTPInputs.tsx

import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import OTPInputstyle from "./Styles/OTPInputstyle";
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
    <View style={OTPInputstyle.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => inputRefs.current[index] = ref}
          placeholder=""
          placeholderTextColor='#7E7E7E'
          style={OTPInputstyle.inbox}
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


export default OTPInputs;
