import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import {Keyboard} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Flipcoin from '../../components/Flipcoin/index';
import OTPInputs from '../../components/OTPInput/index';
import TimerDisplay from '../../components/TimerDisplay/index';
import styles from './styles';
import {OTPScreenConstants} from './Constants';

/**
 * OTP_Screen Component
 * This component renders a screen for OTP (One-Time Password) verification.
 * It includes a countdown timer, OTP input fields, and options to resend the OTP.
 */
export default function OTPScreen() {
  const [otp, setOtp] = useState(OTPScreenConstants.INITIAL_OTP);
  const [seconds, setSeconds] = useState(OTPScreenConstants.INITIAL_COUNTDOWN);
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Effect to manage the countdown timer
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  /**
   * Handles changes in the OTP input fields
   */
  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Pressable onPress={Keyboard.dismiss}>
          <View style={styles.header}>
            <Flipcoin />
            <Text style={styles.head}>{OTPScreenConstants.TITLE}</Text>
            <Text style={styles.subhead}>
              {OTPScreenConstants.SUBTITLE}
              {'\n'}
              {OTPScreenConstants.PHONE_NUMBER}
            </Text>
          </View>

          <View style={styles.content}>
            <OTPInputs
              otp={otp}
              handleOtpChange={handleOtpChange}
              isChecked={isChecked}
            />
            <View style={styles.timerSection}>
              <Text style={styles.waitingText}>
                {OTPScreenConstants.WAITING_TEXT}
              </Text>
              <TimerDisplay seconds={seconds} />
            </View>
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                {OTPScreenConstants.RESEND_TEXT}{' '}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  /*Resend function here */
                }}>
                <Text style={[styles.resendText, styles.boldText]}>
                  {OTPScreenConstants.RESEND_LINK}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>
                {OTPScreenConstants.NEXT_BTN}
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
