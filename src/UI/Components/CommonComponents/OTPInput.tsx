import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
type OTPInputprops={
  length:any,
  onComplete: any,
  keyboardtype: any,
  mstyle: any,
}
const OTPInput = (props: OTPInputprops) => {
  const [otp, setOtp] = useState(Array(props.length).fill(''));
  const [showOtp, setShowOtp] = useState(false);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (isNaN(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < props.length - 1) {
      inputs.current[index + 1].focus();
    }

    if (newOtp.join('').length === props.length) {
      props.onComplete(newOtp.join(''));
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      inputs.current[index - 1].focus();
    }
  };

  const toggleShowOtp = () => {
    setShowOtp(!showOtp);
  };

  return (
    <View style={props.mstyle.container}>
      
      <View style={props.mstyle.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={showOtp || digit === '' ? digit : '*'}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            style={props.mstyle.input}
            ref={(input) => (inputs.current[index] = input)}
          />
        ))}
      </View>
      <View style={props.mstyle.toggleContainer}>
        <IconButton
          icon={showOtp ? 'eye-off' : 'eye'}
          size={24}
          iconColor='#7E7E7E'
          onPress={toggleShowOtp}
        />
        <Text style={props.mstyle.toggleText}>{showOtp ? 'Not Show' : 'Show'}</Text>
      </View>
    </View>
  );
};


export default OTPInput;
