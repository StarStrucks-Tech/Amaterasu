import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Pressable, Keyboard, BackHandler,PixelRatio, Platform } from 'react-native';
import SecureComp from '../Aadhaardetails/Components/SecureComp';
import Flipcoin from './Components/Flipcoin';
import FallbackBottom from './FallbackBottom';
import OTPInputs from './Components/OTPInputs';
import NextButtonotp from './Components/NextButtonotp';
import OTPTextComponent from './Components/OTPTextComponent';
import { useNavigation } from '@react-navigation/native';
import otpscreenStyles from './Styles/AadhaarotpScreemstyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Colors from '../Components/Colors';
import TextComponent from '../Components/Textcomponents';

const AadhaarOTPScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(60);
  const [isOtpFilled, setIsOtpFilled] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  useEffect(() => {
    const backAction = () => {
      setShowModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const handleOtpFilled = (filled) => {
    setIsOtpFilled(filled);
  };

  const handleNext = () => {
    Alert.alert('OTP Matched');
  };

  return (
    <KeyboardAwareScrollView style={{flex:1}}
    contentContainerStyle={{ flexGrow: 1 }}
    >
    <SafeAreaView style={otpscreenStyles.container}>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={{ alignItems: 'center',  }}>
          <Flipcoin />
        </View>
        <OTPTextComponent />
        <OTPInputs isChecked={isChecked} onOtpFilled={handleOtpFilled} />

        <View style={{ alignItems: 'center', }}>
          <SecureComp />
        </View>
        <View style={otpscreenStyles.resendView}>
          {count !== 0 ? (
            <View>
              <Text style={{ 
                 fontWeight: '400',
                  fontSize:  PixelRatio.getPixelSizeForLayoutSize(4), color: Colors.seconarycolor,
                   textAlign: 'center' }}>Waiting for OTP...</Text>
              <Text style={{ 
                 fontSize: PixelRatio.getPixelSizeForLayoutSize(5), color: Colors.seconarycolor,
                  textAlign: 'center' }}>{count + ' seconds'}</Text>
            </View>
          ) : (
            <Text style={{ fontSize: PixelRatio.getPixelSizeForLayoutSize(5), fontWeight: '600',
             color: Colors.secondary }} onPress={() => setCount(60)}>
              {TextComponent.Resend}
            </Text>
          )}
        </View>
        <View style={otpscreenStyles.editAadhaarLink}>
          <Text style={otpscreenStyles.editLinkText}>
            {TextComponent.EditText}
          </Text>
          <Text
            style={otpscreenStyles.editLink}
            onPress={() => navigation.navigate("Adhaardetails")}
          >
            Edit
          </Text>
        </View>
        <NextButtonotp onPress={handleNext} disabled={!isOtpFilled} />
        
        {showModal && <FallbackBottom showModal={showModal} setShowModal={setShowModal} />}
      </Pressable>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default AadhaarOTPScreen;
