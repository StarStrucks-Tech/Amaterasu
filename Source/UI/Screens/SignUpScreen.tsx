import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
// TODO:Implement the toggle password visibility.
const SignUpScreen = () => {/* The 'SignUpScreen' component renders a sign-up form for new users. It collects user information i.e its personal Email ID and password. It handles form submission to register a new user.*/
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const onRegister = () => { //The 'onRegister' function handles user registration using Firebase Authentication. 
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
    Alert.alert('User account created ');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }
  });
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../Assets/image/imgsignup.png')} style={ styles.imagsp} />
      <View style={{marginTop:-40}}>
        <Text style={styles.signup}>Select your personal</Text>
        <Text style={[styles.signup,styles.extra]}>email ID</Text>
      </View>
      <View>
          <Text style={styles.subhead}>This email ID will be linked </Text>
      <Text style={[styles.subhead,styles.extra2]}>to your account</Text>
      </View>
     
      <TextInput
        placeholder="Select your personal email ID"
        placeholderTextColor='#7E7E7E'
        style={[styles.inbox,{fontSize:16}]}
        value={email}
        onChangeText={(value)=>setemail(value)}
      />
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor='#7E7E7E'
        style={[styles.inbox,{fontSize:16},{top:30}]}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(value) => setpassword(value)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={ onRegister} style={ styles.register} >
        <Text style={ styles.regtitle}>Register</Text>
      </TouchableOpacity>
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
    fontSize: 27,
    fontFamily:'Helvetica Neue',
    color: 'black',
    lineHeight:32,
    alignItems:"center",
    fontWeight: '400',
    top:-23
  },
  imagsp: {
    height: 210,
    width: 250,
    top: -100,
    paddingBottom:1

  },
  subhead: {
    fontFamily: 'Open Sans',
    fontWeight: '100',
    fontSize: 13,
    color:'#262123',
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
  }
})


export default SignUpScreen;