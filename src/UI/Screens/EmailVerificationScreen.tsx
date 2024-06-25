import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Platform, PixelRatio } from 'react-native';
import styles from './Email_Verification.styles';
import Colors from '../../Assets/color';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EmailVer from '../Components/EmailVerComponent';

const EmailVerificationScreen = () => {
  const [emailID, setEmailID] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../../Assets/images/email_img.png')} style={styles.icon} />
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
       <EmailVer/>
      </View>
  );
};


export default EmailVerificationScreen;