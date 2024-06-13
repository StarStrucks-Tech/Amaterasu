import React, { useState,useRef } from "react";
import { SafeAreaView, StatusBar, Button, StyleSheet, Text, TextInput, TouchableOpacity, View,Image,ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import SwipeButton from 'rn-swipe-button';
import { useNavigation } from '@react-navigation/native';
import Splash from "../../UI/Components/Splash"
// TODO:Implement the toggle password visibility.
const HomeScreen = () => {/* The 'SignUpScreen' component renders a sign-up form for new users. It collects user information i.e its personal Email ID and password. It handles form submission to register a new user.*/

  return (
    <View style={styles.container}>
      <Image source={require('../../Assets/image/Verification.png')} style={ styles.imagsp} />
      <View style={{marginTop:-40}}>
        <Text style={[styles.signup,{alignContent: "center",textAlign:"center"}]}>Use Aadhar details to open an
      </Text>
        <Text style={[styles.signup,{alignContent: "center",textAlign:"center"}]}>account</Text>
      </View>
      <View>
      <Text style={[styles.subhead, {alignContent: "center", textAlign:"center"}]}>Our partner Bank will verify your</Text>
      <Text style={[styles.subhead,{alignContent: "center", textAlign:"center"}]}>KYC with Aadhaar and open an account with </Text>
      <Text style={[styles.subhead,{alignContent: "center", textAlign:"center"}]}> a maximum deposit limit of Rs. 50,000 in a </Text>
      <Text style={[styles.subhead,{alignContent: "center", textAlign:"center"}]}>financial year. KUBAIR does not store or use your </Text>
      <Text style={[styles.subhead,{alignContent: "center", textAlign:"center"}]}>Aadhaar details</Text>
      <Text style={[styles.subhead,{alignContent: "center", textAlign:"center"}]}>You can always upgrade to a full-fledged</Text>
      <Text style={[styles.subhead,{alignContent: "center", textAlign:"center"} ]}>account later</Text>
      </View>
    <Image source={require('../../Assets/image/ss.png')} style={ {height:11,width:78,marginTop: 10}} />
    <View style={{marginTop:40, marginBottom: 10}}>
      <Text style={[styles.subhead, {alignContent: "center", textAlign:"center" ,color: "#7E7E7E", fontFamily: 'OpenSans-ExtraBold'}]}>By proceeding, you consent to the above and agree
        </Text>
      <Text style={[styles.subhead, {alignContent: "center", textAlign:"center", color: "#7E7E7E"}]}>that no other account has been or will opened 
        </Text>
      <Text style={[styles.subhead, {alignContent: "center", textAlign:"center", color: "#7E7E7E"}]}>using OTP-based KYC with another Regulated Entity
        </Text>
      </View>

      <Splash/>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFE4',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
  },  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inbox: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth:3,
    paddingHorizontal: 12,
    paddingVertical:0,
    width:'90%',
    marginTop: 20,
    top: 20,
    color:'black'
    
  },
  register: {
    backgroundColor: '#D05F33',
    width: 140,
    height:31,
    alignItems: 'center',
    borderRadius: 5,
    // marginVertical:10
    gap:10,
    marginTop: 30,
    marginBottom: 20,
    top:120
    
    
  },
  regtitle: {
    fontSize: 16,
    fontWeight: '600',
    color:'white',
    marginBottom: 10,
    top:3.2
  },
  signup: {
    fontSize: 23  ,
    fontFamily:'Helvetica Neue',
    color: 'black',
    lineHeight:32,
    justifyContent: "center",
    alignItems:"center",
    fontWeight: '400',
    top:-23
  },
  imagsp: {
    height: 250,
    width: 250,
    top: -100,
    paddingBottom:1,
    marginTop: 100

  },
  subhead: {
    fontFamily: 'Open Sans',
    fontWeight: '100',
    fontSize: 13,
    color:'#262123',
    justifyContent: "center",
    alignItems: 'center',
    top:-7,
    lineHeight:18
  },
  extra: {
    left: 75,
    lineHeight: 32,
    marginBottom:20
  },
  extra2: {
    left: 30,
    marginBottom:15
  },  scrollView: {
    width: '100%',
    height: 100,
  },
  scrollContent: {
    width: 1000, // Width of the scrollable content
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },  
  splashWrapper: {
    height: 10,
    width: 200,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default HomeScreen;