import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './PhoneVerific.styles';

export default function Phone_Verification() {
  const [mobileNumber, setMobileNumber] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Let's go!</Text>
      <View style={styles.subheadingContainer}>
        <Text style={styles.subhead} numberOfLines={2}>
          Please provide your mobile number to link it{'\n'}
          <Text style={styles.centeredText}>with your savings account.</Text>
        </Text>
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          placeholder="+91"
          placeholderTextColor={'#898A8D'}
          value={mobileNumber}
          onChangeText={text => setMobileNumber(text)}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.description}>
        Enter the same number that you're using {''}
        <Text style={styles.boldText}>on this phone</Text>
      </Text>
      <Image
        source={require('../../Assets/Imageofhanfs.png')}
        style={styles.imagei}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
