import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const EmailVerificationScreen = () => {
  const [emailID, setEmailID] = useState('');
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <Image source={require('C:\Users\hp\OneDrive\Desktop\Projects\Amaterasu\src\Assets\images\email_img.png')} style={styles.icon} />
        <Text style={styles.title}>Select your personal email ID</Text>
        <Text style={styles.subtitle}>This email ID will be linked to your account</Text>
        <View style={styles.iconContainer}>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Select your Email ID"
          value={emailID}
          onChangeText={setEmailID}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          maxLength={40}
        />
        <Text style={styles.charCount}>{name.length}/40</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFE4',
    padding: 16

  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFE4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 800,
    marginTop: 100,
  },
  iconContainer: {
    marginBottom: 100,
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  input: {
    width: '120%',
    height: 60,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 30,
    marginTop: 20,
    fontSize: 16,
  },
  charCount: {
    alignSelf: 'flex-end',
    color: '#999',
    marginRight: '20%',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default EmailVerificationScreen;