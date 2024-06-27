import React, { useState,useRef } from "react";
import { SafeAreaView, StatusBar, Button, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,ScrollView, Alert,PixelRatio } from 'react-native';
import Splash from "./Components/Splash";
import adharconsentstyles from "./Styles/adhaarconsentstyle";
import Aadhaarcomponent from "./Components/Aadhaarconsentcomponent";
const AdhaarConsent = () => {
  return (
    <View style={adharconsentstyles.container}>
    <Image source={require('../../Assets/image/Verification.png')} style={ adharconsentstyles.imagsp} />
    <Aadhaarcomponent/>
    <Splash/>
    </View>
  )
}
export default AdhaarConsent;