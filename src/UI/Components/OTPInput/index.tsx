import React, {useRef} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

/**
 * Props for the OTPInput component.
 */
type OTPInputProps = {
  otp: string[];
  handleOtpChange: (index: number, value: string) => void;
  isChecked: boolean;
};

/**
 * OTPInput Component
 * This component creates a series of text input fields for OTP entry.
 * It automatically moves focus to the next input when a digit is entered.
 */
const OTPInputs = ({otp, handleOtpChange, isChecked}: OTPInputProps) => {
  /**
   * Refs for the input fields to manage focus.
   */
  const inputRefs = useRef<TextInput[]>(Array(otp.length).fill(null));

  /**
   * Handles changes in the input fields.
   */
  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      handleOtpChange(index, value);
      if (
        value.length === 1 &&
        index < otp.length - 1 &&
        inputRefs.current[index + 1]
      ) {
        (inputRefs.current[index + 1] as TextInput).focus();
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

export default OTPInputs;
