import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable, Keyboard, PixelRatio } from 'react-native';
import AadhaarInput from "./Components/AdhaarInput";
import NextButton from "./Components/NextButton";
import SecureComp from "./Components/SecureComp";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 
import { adhaardetailsScreenStyles } from "./Styles/adhaardetailsScreenStyles"; 
import { SafeAreaView } from "react-native-safe-area-context";
import TextComponent from "../Components/Textcomponents";
const Adhaardetails = ({ navigation }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const isValidAadhaar = (input) => {
    return /^\d{12}$/.test(input); 
  };

  return (
    <KeyboardAwareScrollView style={{flex:1}}
    contentContainerStyle={{ flexGrow: 1 }}
    >
    <SafeAreaView style={adhaardetailsScreenStyles.container}>
      <Pressable  onPress={Keyboard.dismiss}>
        <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
      <Image
        source={require('../../Assets/image/AAVerification.png')}
        style={adhaardetailsScreenStyles.imageStyle}
        resizeMode="contain"
      />
      <Text style={adhaardetailsScreenStyles.signupText}>{TextComponent.Aadhaardetailtitle}</Text>

      <AadhaarInput
        aadhaarNumber={aadhaarNumber}
        setAadhaarNumber={setAadhaarNumber}
      />
      <SecureComp />

      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={adhaardetailsScreenStyles.consentContainer}
      >
        <View style={[adhaardetailsScreenStyles.radioCircle, isChecked && adhaardetailsScreenStyles.checkedRadioCircle]}>
          {isChecked && (
            <Image
              source={require('../../Assets/image/right.png')}
              style={adhaardetailsScreenStyles.checkIcon}
            />
          )}
        </View>
        <View >
          <Text style={adhaardetailsScreenStyles.radioText}>{TextComponent.checkboxText}
          </Text>
        </View>
      </TouchableOpacity>

      <NextButton
        isValidAadhaar={isValidAadhaar(aadhaarNumber)}
        isChecked={isChecked}
        onPress={() => navigation.navigate("AadhaarOTPScreen")}
      /></View>
</Pressable>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Adhaardetails;