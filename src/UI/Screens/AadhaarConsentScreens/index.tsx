import React, { useState,useRef } from "react";
import { SafeAreaView, StatusBar, Button, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,ScrollView, Alert,PixelRatio } from 'react-native';
import Splash from "../../Components/SplashComponent";
import { TextComponentConstant } from "./Constant";
import adharconsentstyles from "../../Components/AadhaarConsentScreenComp/style";
import Aadhaarcomponent from "../../Components/AadhaarConsentScreenComp";
const AadhaarConsentScreens = () => {
  return (
    <View style={adharconsentstyles.container}>
    <Image source={require('../AadhaarConsentScreens/assests/Verification.png')} style={ adharconsentstyles.imagsp} />
    <Aadhaarcomponent imageSource={require('../../Screens/AadhaarConsentScreens/assests/done.png')} 
    textsubhead={TextComponentConstant.Aadhaarsubhead} texttitle={TextComponentConstant.Aadhartitle}
    textsubhead1={TextComponentConstant.Aadhaarsubhead1}/>
    <Splash imageSource={require('../../Screens/AadhaarConsentScreens/assests/arrows.png')}
    text={TextComponentConstant.Splashtext}/>
    </View>
  )
}
export default AadhaarConsentScreens;