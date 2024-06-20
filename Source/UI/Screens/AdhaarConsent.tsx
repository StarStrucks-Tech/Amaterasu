import React, { useState,useRef } from "react";
import { SafeAreaView, StatusBar, Button, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,ScrollView, Alert } from 'react-native';
import Splash from "../Components/Splash";
import adharconsentstyles from "../Components/Styles/adhaarconsentstyle";
const AdhaarConsent = () => {
  return (
    <View style={adharconsentstyles.container}>
      <Image source={require('../../Assets/image/Verification.png')} style={ adharconsentstyles.imagsp} />
      <View style={{marginTop:-40}}>
        <Text style={[adharconsentstyles.signup,{alignContent: "center",textAlign:"center"}]}>Use Aadhar details to open an
      </Text>
        <Text style={[adharconsentstyles.signup,{alignContent: "center",textAlign:"center"}]}>account</Text>
      </View>
      <View>
      <Text style={[adharconsentstyles.subhead, {alignContent: "center", textAlign:"center"}]}>Our partner Bank will verify your</Text>
      <Text style={[adharconsentstyles.subhead,{alignContent: "center", textAlign:"center"}]}>KYC with Aadhaar and open an account with </Text>
      <Text style={[adharconsentstyles.subhead,{alignContent: "center", textAlign:"center"}]}> a maximum deposit limit of Rs. 50,000 in a </Text>
      <Text style={[adharconsentstyles.subhead,{alignContent: "center", textAlign:"center"}]}>financial year. KUBAIR does not store or use your </Text>
      <Text style={[adharconsentstyles.subhead,{alignContent: "center", textAlign:"center"}]}>Aadhaar details</Text>
      <Text style={[adharconsentstyles.subhead,{alignContent: "center", textAlign:"center"}]}>You can always upgrade to a full-fledged</Text>
      <Text style={[adharconsentstyles.subhead,{alignContent: "center", textAlign:"center"} ]}>account later</Text>
      </View>
    <Image source={require('../../Assets/image/ss.png')} style={ {height:11,width:78,marginTop: 10}} />
    <View style={{marginTop:40, marginBottom: 10}}>
      <Text style={[adharconsentstyles.subhead, {alignContent: "center", textAlign:"center" ,color: "#7E7E7E", fontFamily: 'OpenSans-ExtraBold'}]}>By proceeding, you consent to the above and agree
        </Text>
      <Text style={[adharconsentstyles.subhead, {alignContent: "center", textAlign:"center", color: "#7E7E7E"}]}>that no other account has been or will opened 
        </Text>
      <Text style={[adharconsentstyles.subhead, {alignContent: "center", textAlign:"center", color: "#7E7E7E"}]}>using OTP-based KYC with another Regulated Entity
        </Text>
      </View>

      <Splash/>
    </View>

  )
}
export default AdhaarConsent;