import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Pressable, Keyboard, PixelRatio } from 'react-native';
import AadhaarInput from "../../Components/AadhaarNumberInputs";
import NextButton from "../../Components/NextButton";
import SecureComponent from "../../Components/SecureComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 
import { adhaardetailsScreenStyles } from "./styles"; 
import { TextComponentConstant } from "../AadhaarConsentScreens/Constant";
import { SafeAreaView } from "react-native-safe-area-context";
const Aadhaardetails = ({navigation }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const isValidAadhaar = (input: string) => {
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
        source={require('../AadhaarDetailScreen/assests/AAVerification.png')}
        style={adhaardetailsScreenStyles.imageStyle}
        resizeMode="contain"
      />
      <Text style={adhaardetailsScreenStyles.signupText}>{TextComponentConstant.Aadhaardetailtitle}</Text>

      <AadhaarInput
        aadhaarNumber={aadhaarNumber}
        setAadhaarNumber={setAadhaarNumber}
      />
      <SecureComponent />

      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={adhaardetailsScreenStyles.consentContainer}
      >
        <View style={[adhaardetailsScreenStyles.radioCircle, isChecked && adhaardetailsScreenStyles.checkedRadioCircle]}>
          {isChecked && (
            <Image
              source={require('../AadhaarDetailScreen/assests/right.png')}
              style={adhaardetailsScreenStyles.checkIcon}
            />
          )}
        </View>
        <View >
          <Text style={adhaardetailsScreenStyles.radioText}>{TextComponentConstant.checkboxText}
          </Text>
        </View>
      </TouchableOpacity>
{isChecked?
<View>
      <NextButton isValidAadhaar={isValidAadhaar(aadhaarNumber)} onPressNavigate={() => navigation.navigate("AadhaarOTPScreen")}
      /></View>:null
    }</View>
</Pressable>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Aadhaardetails;