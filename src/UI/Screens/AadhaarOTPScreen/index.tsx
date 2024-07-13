import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Pressable, Keyboard, BackHandler, PixelRatio, Platform } from 'react-native';
import Flipcoin from '../../Components/FlipCoin';
import FallbackBottom from '../../Components/FallBackBottomSheetComponent';
import AadhaarOtpInputs from '../../Components/AadhaarOtpInput';
import AadhaarOtpTextComponent from '../../Components/AadhaarOtpTextComponent';
import { useNavigation } from '@react-navigation/native';
import AadhaarotpscreenStyles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constant from '../../../UI-Constants/Constant.json';
import { TextComponentConstant } from '../AadhaarConsentScreens/Constant';
import SecureComponent from '../../Components/SecureComponent';
import NextButton from '../../Components/NextButton';

const AadhaarOTPScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [count, setCount] = useState(60);
  const [isOtpFilled, setIsOtpFilled] = useState(false);
  const navigation = useNavigation();

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
    <KeyboardAwareScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={AadhaarotpscreenStyles.container}>
        <Pressable onPress={Keyboard.dismiss}>
          <View style={{ alignItems: 'center' }}>
            <Flipcoin />
          </View>
          <AadhaarOtpTextComponent />
          <AadhaarOtpInputs isChecked={isChecked} onOtpFilled={handleOtpFilled} />
          <View style={{ alignItems: 'center' }}>
            <SecureComponent />
          </View>
          <View style={AadhaarotpscreenStyles.resendView}>
            {count !== 0 ? (
              <View>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(4),
                    color: Constant.Colors.GRAY,
                    textAlign: 'center',
                  }}>
                  Waiting for OTP...
                </Text>
                <Text
                  style={{
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
                    color: Constant.Colors.GRAY,
                    textAlign: 'center',
                  }}>
                  {count + ' seconds'}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
                  fontWeight: '600',
                  color: Constant.Colors.AQUA_GREEN,
                }}
                onPress={() => setCount(60)}>
                {TextComponentConstant.Resend}
              </Text>
            )}
          </View>
          <View style={AadhaarotpscreenStyles.editAadhaarLink}>
            <Text style={AadhaarotpscreenStyles.editLinkText}>{TextComponentConstant.EditText}</Text>
            <Text style={AadhaarotpscreenStyles.editLink} onPress={() => navigation.navigate('Aadhaardetails')}>
              Edit
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <NextButton onPressNavigate={() => navigation.navigate('LoadingScreen')} isValidAadhaar={isOtpFilled} />
          </View>
          {showModal && <FallbackBottom showModal={showModal} setShowModal={setShowModal} />}
        </Pressable>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default AadhaarOTPScreen;
