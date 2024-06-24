import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import styles from './Email_Verification.styles'


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
          placeholderTextColor={'#898A8D'}
          value={emailID}
          onChangeText={setEmailID}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={'#898A8D'}
          value={name}
          onChangeText={setName}
          maxLength={40}
        />
        <Text style={styles.charCount}>{name.length}/40</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
  );
};


export default EmailVerificationScreen;