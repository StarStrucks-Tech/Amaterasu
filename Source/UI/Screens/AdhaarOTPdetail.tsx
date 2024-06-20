import React, { useState, useEffect } from 'react';
import { View, Image, BackHandler, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPInputs from '../Components/OTPInputs';
import Flipcoin from '../Components/Flipcoin';
import SecureComp from '../Components/SecureComp';
import FallbackBottom from '../Components/FallbackBottom';
import TimerDisplay from '../Components/TimerDisplay'; // Update import to TimerDisplay
import NextButton1 from '../Components/NextButton1'; // Update import to NextButton1
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import adhaarOtpstyles from '../Components/Styles/adhaarOtpScren';

const AdhaarOTPdetail = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold OTP digits
  const [remainingSeconds, setRemainingSeconds] = useState(60); // State to hold remaining seconds
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isActiveTimer, setIsActiveTimer] = useState(true); // State to control timer activation
  const navigation = useNavigation(); // Initialize navigation hook

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(prevSeconds => prevSeconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [remainingSeconds]);

  useEffect(() => {
    const backAction = () => {
      setShowModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  // Function to handle input change for each OTP digit
  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsChecked(!isChecked);
  };

  // Check if all OTP digits are filled
  const isOtpFullyFilled = () => {
    return otp.every(value => value !== '');
  };

  return (
    <View style={adhaarOtpstyles.container}>
      <View style={{ marginTop: -200, marginBottom: 210 }}>
        <Flipcoin />
      </View>
      <View style={{ marginTop: -280, marginBottom: -20 }}>
        <Text style={[adhaarOtpstyles.signup, { fontWeight: '600' }]}>Verify with OTP</Text>
      </View>
      <View>
        <Text style={adhaarOtpstyles.marginstyle}></Text>
        <Text style={[adhaarOtpstyles.subhead, { alignContent: 'center', textAlign: 'center' }]}>
          An OTP was sent to your Aadhaar-registered
        </Text>
        <Text style={[adhaarOtpstyles.subhead, { alignContent: 'center', textAlign: 'center' }]}>
          mobile number. For security reasons, we won’t
        </Text>
        <Text style={[adhaarOtpstyles.subhead, { alignContent: 'center', textAlign: 'center' }]}>
          auto-read your Aadhaar OTP, Please type it
        </Text>
        <Text style={[adhaarOtpstyles.subhead, { alignContent: 'center', textAlign: 'center' }]}>out below</Text>
      </View>
      <OTPInputs otp={otp} handleOtpChange={handleOtpChange} isChecked={isChecked} />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <View style={adhaarOtpstyles.eyeContainer}>
          <Image
            source={
              isChecked
                ? require('../../Assets/image/eye.png')
                : require('../../Assets/image/eye-outline.png')
            }
            style={adhaarOtpstyles.eyeIcon}
          />
          <Text style={adhaarOtpstyles.eyeText}>{isChecked ? "DON'T SHOW" : 'SHOW'}</Text>
        </View>
      </TouchableOpacity>
      <SecureComp />
      <SafeAreaView style={adhaarOtpstyles.safeArea}>
        <Text style={adhaarOtpstyles.waitingText}>Waiting for OTP...</Text>
        <TimerDisplay seconds={remainingSeconds} isActive={isActiveTimer} />
      </SafeAreaView>
      <NextButton1 isChecked={isOtpFullyFilled()} togglePasswordVisibility={togglePasswordVisibility} />
      {showModal && <FallbackBottom showModal={showModal} setShowModal={setShowModal} />}
    </View>
  );
};

export default AdhaarOTPdetail;
