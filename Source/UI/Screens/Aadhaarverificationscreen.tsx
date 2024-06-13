import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const AadhaarVerificationScreen = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpRequestId, setOtpRequestId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRequestOTP = async () => {
    setLoading(true);
    try {
      // Replace with actual API endpoint and API key/token
      const apiKey = 'your_api_key';
      const apiUrl = 'https://api.example.com/aadhaar/request-otp';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          aadhaar_number: aadhaarNumber,
          phone_number: phoneNumber,
        }),
      });

      const data = await response.json();

      // Handle response based on API's documentation
      if (response.ok) {
        setOtpRequestId(data.otpRequestId); // Store OTP request ID for verification
        Alert.alert('OTP Sent', 'OTP sent to your phone number.');
      } else {
        Alert.alert('Request Failed', data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error during OTP request:', error);
      Alert.alert('Error', 'Failed to send OTP. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyAadhaar = async () => {
    setLoading(true);
    try {
      // Replace with actual API endpoint and API key/token
      const apiKey = 'your_api_key';
      const apiUrl = 'https://api.example.com/aadhaar/verify';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          aadhaar_number: aadhaarNumber,
          otp_request_id: otpRequestId,
          otp: otp,
        }),
      });

      const data = await response.json();

      // Handle response based on API's documentation
      if (response.ok) {
        Alert.alert('Verification Successful', 'Aadhaar details verified successfully.');
        // Handle navigation or state updates as needed
      } else {
        Alert.alert('Verification Failed', data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error during Aadhaar verification:', error);
      Alert.alert('Error', 'Failed to verify Aadhaar. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Aadhaar Number"
        keyboardType="numeric"
        value={aadhaarNumber}
        onChangeText={text => setAadhaarNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Button
        title={loading ? 'Sending OTP...' : 'Send OTP'}
        onPress={handleRequestOTP}
        disabled={loading}
      />
      {otpRequestId && (
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={text => setOtp(text)}
          />
          <Button
            title={loading ? 'Verifying...' : 'Verify Aadhaar'}
            onPress={handleVerifyAadhaar}
            disabled={loading}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  otpContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default AadhaarVerificationScreen;
