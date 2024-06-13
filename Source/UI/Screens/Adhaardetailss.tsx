// Adhaardetailss.tsx

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, BackHandler,TouchableOpacity,Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import OTPInputs from "../Components/OTPInputs";
import Flipcoin from "../Components/Flipcoin";
import SecureComp from "../Components/SecureComp";
import FallbackBottom from "../Components/FallbackBottom";
import TimerDisplay from "../Components/TimerDisplay";

const Adhaardetailss = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to hold OTP digits
  const [seconds, setSeconds] = useState(60);
  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  useEffect(() => {
    const backAction = () => {
      setShowModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

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

  return (
    <View style={styles.container}>
      <View style={{marginTop:-200, marginBottom:210}}><Flipcoin/></View>
      <View style={{ marginTop: -280,marginBottom:-20 }}>
        <Text style={[styles.signup, { fontWeight: "600" }]}>Verify with OTP</Text>
      </View>
      <View>
        <Text style={styles.marginstyle}></Text>
        <Text style={[styles.subhead, { alignContent: "center", textAlign: "center" }]}>An OTP was sent to your Aadhaar-registered</Text>
        <Text style={[styles.subhead, { alignContent: "center", textAlign: "center" }]}>mobile number. For security reasons, we won’t</Text>
        <Text style={[styles.subhead, { alignContent: "center", textAlign: "center" }]}>auto-read your Aadhaar OTP, Please type it</Text>
        <Text style={[styles.subhead, { alignContent: "center", textAlign: "center" }]}>out below</Text>
      </View>
      <OTPInputs otp={otp} handleOtpChange={handleOtpChange} isChecked={isChecked} />
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <View style={styles.eyeContainer}>
          <Image source={isChecked ? require('../../Assets/image/eye.png') : require('../../Assets/image/eye-outline.png')}
            style={styles.eyeIcon} />
          <Text style={styles.eyeText}>{isChecked ? "DON'T SHOW" : "SHOW"}</Text>
        </View>
      </TouchableOpacity>
      <SecureComp />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.waitingText}>Waiting for OTP...</Text>
        <TimerDisplay seconds={seconds} />
      </SafeAreaView>
      <View style={{ marginTop: 80, marginBottom: -70 }}>
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <View style={isChecked ? styles.checkedButton : styles.uncheckedButton}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
      {showModal && <FallbackBottom showModal={showModal} setShowModal={setShowModal} />}
    </View>
  );
};

const styles = StyleSheet.create({
  marginstyle: {
    marginTop: 10
  },
  container: {
    width:"100%",
    backgroundColor: '#FFFFE4',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  signup: {
    fontSize: 27,
    fontFamily: 'Helvetica Neue',
    color: 'black',
    lineHeight: 32,
    alignItems: "center",
    fontWeight: '400',
    top: 0
  },
  imagsp: {
    height: 190,
    width: 200,
    top: -190,
    paddingTop: 20,
    marginTop: 60,
    marginBottom: 40
  },
  subhead: {
    fontFamily: 'Open Sans',
    fontWeight: '100',
    fontSize: 13,
    color: '#262123',
    alignItems: 'center',
    textAlign: "center",
    lineHeight: 18
  },
  safeArea: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: "column"
  },
  waitingText: {
    alignContent: "center",
    textAlign: "center",
    color: "#7E7E7E",
    fontFamily: 'Open Sans'
  },
  eyeContainer: {
    marginTop: -20,
    height: 50,
    width: 400,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  eyeIcon: {
    marginRight: 10,
    marginLeft: 0,
    height: 20,
    width: 25
  },
  eyeText: {
    fontFamily: 'Open Sans',
    color: "#7E7E7E"
  },
  checkedButton: {
    backgroundColor: "#D05F33",
    height: 40,
    width: 130,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  uncheckedButton: {
    backgroundColor: "#7E7E7E",
    height: 40,
    width: 130,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#FFFFE4"
  }
});

export default Adhaardetailss;
