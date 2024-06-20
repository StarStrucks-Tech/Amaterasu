import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Nextbutton1style from './Styles/NextButton1style';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const NextButton1 = ({ isChecked, togglePasswordVisibility }) => {
  const navigation = useNavigation(); // Initialize navigation hook

  const handlePress = () => {
    if (isChecked) {
      // Navigate to LoadingScreen component
      navigation.navigate('LoadingScreen');
    } else {
      // Handle toggle password visibility if not all OTP digits are filled
      togglePasswordVisibility();
    }
  };

  return (
    <View style={[Nextbutton1style.container, isChecked ? Nextbutton1style.checkedButton : Nextbutton1style.uncheckedButton]}>
      <TouchableOpacity onPress={handlePress}>
          <Text style={Nextbutton1style.buttonText}>Next</Text>

      </TouchableOpacity>
    </View>
  );
};

export default NextButton1;
