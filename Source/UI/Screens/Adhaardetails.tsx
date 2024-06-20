import React, { useState } from "react";
<<<<<<< HEAD
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AadhaarInput from "../Components/AdhaarInput";
import NextButton from "../Components/NextButton";
import SecureComp from "../Components/SecureComp";
import { adhaardetailsScreenStyles } from "../Components/Styles/adhaardetailsScreenStyles"; 
=======
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f

const Adhaardetails = ({ navigation }) => {
  const [aadhaar_number, setAadhaarNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);

<<<<<<< HEAD
  const isValidAadhaar = (input) => {
    return /^\d{12}$/.test(input); 
  };

  return (
    <View style={adhaardetailsScreenStyles.container}>
      <Image
        source={require('../../Assets/image/AAVerification.png')}
        style={adhaardetailsScreenStyles.imageStyle}
        resizeMode="contain"
      />
      <Text style={adhaardetailsScreenStyles.signupText}>Enter your Aadhaar details</Text>

      <AadhaarInput
        aadhaar_number={aadhaar_number}
        setAadhaarNumber={setAadhaarNumber}
      />

      <SecureComp />

      <TouchableOpacity
        onPress={() => setIsChecked(!isChecked)}
        style={adhaardetailsScreenStyles.consentContainer}
      >
        <View style={[adhaardetailsScreenStyles.radioCircle, isChecked && adhaardetailsScreenStyles.checkedRadioCircle]}>
          {isChecked && (
            <Image
              source={require('../../Assets/image/right.png')}
              style={adhaardetailsScreenStyles.checkIcon}
            />
          )}
        </View>
        <View >
          <Text style={adhaardetailsScreenStyles.radioText}>I voluntarily provide my Aadhaar number and </Text>
          <Text style={adhaardetailsScreenStyles.radioText}>provide my consent to Bank to obtain</Text>
          <Text style={adhaardetailsScreenStyles.radioText}>my aadhaar details from UIDAI for establishing</Text>
          <Text style={adhaardetailsScreenStyles.radioText}>my identity.</Text>
        </View>
      </TouchableOpacity>

      <NextButton
        isValidAadhaar={isValidAadhaar(aadhaar_number)}
        isChecked={isChecked}
        onPress={() => navigation.navigate("AdhaarOTPdetail")}
      />
=======
  // Function to check if the input is a 12-digit number
  const isValidAadhaar = (input) => {
    return /^\d{12}$/.test(input); // Checks if input consists of exactly 12 digits
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../Assets/image/AAVerification.png')} style={styles.imagsp} />
      <View style={{ marginTop: -60 }}>
        <Text style={styles.signup}>Enter your Aadhaar details</Text>
      </View>

      <TextInput
        placeholder="Enter Aadhar Number"
        placeholderTextColor='#7E7E7E'
        style={[styles.inbox, { fontSize: 16, marginBottom: 60, marginTop: 30 }]}
        value={aadhaar_number}
        onChangeText={(value) => setAadhaarNumber(value)}
        keyboardType="numeric"
        maxLength={12} // Limits input to 12 characters
      />

      <View style={{
        marginTop: 10,
        height: 50,
        width: 400,
        flexDirection: "row",
        backgroundColor: "#E0E0E0",
        alignItems: "center"
      }}>
        <Image source={require('../../Assets/image/Lock.png')} style={{ marginRight: 10, marginLeft: 80, height: 20, width: 15 }} />
        <Text style={{ fontFamily: 'Open Sans', color: "#7E7E7E" }}>Your Aadhaar details are protected</Text>
      </View>

      <View style={{ marginBottom: -60, marginTop: 50 }}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.radio, { alignItems: 'center', justifyContent: 'center', marginBottom: 45 }]}>
              {isChecked ? <View style={[styles.radiobg, { alignItems: 'center', justifyContent: 'center' }]}>
                <Image source={require('../../Assets/image/right.png')} style={{ height: 10, width: 14 }} />
              </View> : null}
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.radioText}>I voluntarily provide my Aadhaar number and </Text>
              <Text style={styles.radioText}>provide my consent to Bank to obtain</Text>
              <Text style={styles.radioText}>my aadhaar details from UIDAI for establishing</Text>
              <Text style={styles.radioText}>my identity.</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 80, marginBottom: -70 }}>
        {isValidAadhaar(aadhaar_number) && isChecked && (
          <TouchableOpacity onPress={() => navigation.navigate("Adhaardetailss")}>
            <View style={{
              height: 40,
              width: 130,
              borderRadius: 5,
              marginBottom: -30,
              borderColor: '#FFFFE4',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: "#D05F33"
            }}>
              <Text style={{ color: "#FFFFE4" }}>Next</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
    </View>
  );
};

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFE4',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  radiobg: {
    backgroundColor: "#D05F33",
    height: 20,
    width: 20,
    borderRadius: 5,
  },
  inbox: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 0,
    width: '90%',
    marginTop: 100,
    top: 0,
    color: 'black'
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 5,
    margin: 10,
    borderColor: '#B2B2B2',
    borderWidth: 1
  },
  radioText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#262123"
  },
  signup: {
    fontSize: 27,
    fontFamily: 'Helvetica Neue',
    color: 'black',
    lineHeight: 32,
    alignItems: "center",
    fontWeight: '400',
    top: 0
  },
  imagsp: {
    height: 210,
    width: 250,
    top: -100,
    paddingTop: 10,
  }
});

>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
export default Adhaardetails;
