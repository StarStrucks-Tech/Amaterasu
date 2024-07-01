// OTPInputs.tsx

import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface OTPInputsProps {
  otp: string[];
  handleOtpChange: (index: number, value: string) => void;
  isChecked: boolean;
}

const OTPInputs: React.FC<OTPInputsProps> = ({
  otp,
  handleOtpChange,
  isChecked,
}) => {
  const inputRefs = useRef<TextInput[]>(Array(otp.length).fill(null));

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      handleOtpChange(index, value);
      // Move focus to the next input field after entering a digit
      if (
        value.length === 1 &&
        index < otp.length - 1 &&
        inputRefs.current[index + 1]
      ) {
        (inputRefs.current[index + 1] as TextInput).focus(); // Type assertion to TextInput
      }
    }
  };

  return (
    <View style={styles.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          placeholder=""
          placeholderTextColor="#7E7E7E"
          style={styles.inbox}
          value={digit}
          onChangeText={value => handleInputChange(index, value)}
          keyboardType="numeric"
          maxLength={1}
          secureTextEntry={!isChecked}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60,
  },
  inbox: {
    borderBottomColor: '#7E7E7E',
    borderBottomWidth: 3,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 30, // Adjust width as needed to accommodate each digit
    height: 40, // Ensure consistent height for uniform appearance
    marginHorizontal: 5, // Adjust spacing between TextInput components
    top: -307,
    color: 'black',
    textAlign: 'center',
  },
});

export default OTPInputs;
