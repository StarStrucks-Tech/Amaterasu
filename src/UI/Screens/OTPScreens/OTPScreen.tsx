import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Flipcoin from '../Components/Flipcoin';
import OTPInputs from '../Components/OTP_input';
import TimerDisplay from '../Components/TimerDisplay';
import styles from './OTP_Screen.style';
export default function OTP_Screen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold OTP digits
  const [seconds, setSeconds] = useState(60);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [seconds]);

  // Function to handle input change for each OTP digit
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 115, marginBottom: 0}}>
        <Flipcoin />
      </View>
      <Text style={styles.head}>Verify with OTP</Text>
      <Text style={styles.subhead}>
        Waiting to automatically detect the OTP sent to
      </Text>
      <Text style={styles.subhead}>+91-xxxxx xxxxx</Text>

      <OTPInputs
        otp={otp}
        handleOtpChange={handleOtpChange}
        isChecked={isChecked}
      />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.waitingText}>Waiting for secure code</Text>
        <TimerDisplay seconds={seconds} />
      </SafeAreaView>
      <Text style={styles.resendText}>
        Didn't receive the security code? {''}
        <Text style={styles.boldText}>Resend OTP</Text>
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
