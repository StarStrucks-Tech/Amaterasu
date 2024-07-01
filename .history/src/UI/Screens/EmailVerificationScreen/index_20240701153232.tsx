import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Platform, PixelRatio } from 'react-native';
import styles from './styles';
import Colors from '../../../Configs/color'
import Button from '../../Components/NextButton';
import { Pressable } from 'react-native';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"; 

const EmailVerificationScreen = () => {
  const [emailID, setEmailID] = useState('');
  const [name, setName] = useState('');

  return (

    <SafeAreaView style={styles.container}>
    <KeyboardAwareScrollView style={{flex:1}}
    contentContainerStyle={{ flexGrow: 1 }}
    > 
       <Pressable  onPress={Keyboard.dismiss}>
    <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
      <Image source={require('../../../Assets/images')} style={styles.icon} />
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
       <EmailVer/></View>
       </Pressable>
       </KeyboardAwareScrollView>
       </SafeAreaView>
  );
};


export default EmailVerificationScreen;