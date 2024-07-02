/**
 * EmailVerificationScreen Component
 * 
 * This component renders a screen for email verification and user name input.
 * It includes form fields for email and name, along with explanatory text and an image.
 * The screen is wrapped in a KeyboardAwareScrollView to handle keyboard interactions.
 * 
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Platform, PixelRatio } from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';
import { Pressable } from 'react-native';
import { Colors } from '../../../Assets/Colors';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 


const EmailVerificationScreen = () => {    
  /**
   * State for storing the user's email ID
   * @type {[string, function]}
   */     
  const [emailID, setEmailID] = useState('');
  const [name, setName] = useState('');

  /**
   * State for storing the user's name
   * @type {[string, function]}
   */

  return (

    <KeyboardAwareScrollView
    > 
       <Pressable  onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Image source={require('../../../Assets/images/email_img.png')} style={styles.icon} />
        <Text style={styles.title}>Select your personal</Text>
        <Text style={styles.title}>email ID</Text>
        <Text style={styles.subtitle} numberOfLines={2}>
           This email ID will be linked {'\n'}
          <Text style={styles.iconContainer}>to your account</Text>
          </Text>
        <TextInput
          style={styles.input}
          placeholder="Select your email ID"
          placeholderTextColor={Colors.GRAY}
          value={emailID}
          onChangeText={setEmailID}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={Colors.GRAY}
          value={name}
          onChangeText={setName}
          maxLength={40}
        />
        <Text style={styles.charCount}>{name.length}/40</Text>
       <Button/></View>
       </Pressable>
       </KeyboardAwareScrollView>
  );
};


export default EmailVerificationScreen;