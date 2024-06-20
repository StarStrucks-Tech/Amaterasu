import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import useIsFocused hook
import Fallbackstyle from "./Styles/Fallbackstyle";

const FallbackBottom = ({ showModal, setShowModal }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // Hook to check if screen is focused

  const handleYesPress = () => {
    // Navigate to AdhaarConsent screen
    navigation.navigate('AdhaarConsent');
  };

  // Check if screen is focused (to prevent modal on LoadingScreen)
  if (!isFocused) {
    return null; // Return null if screen is not focused (LoadingScreen)
  }

  return (
    <Modal transparent={true} visible={showModal} animationType="none">
      <View style={Fallbackstyle.overlay}>
        <View style={Fallbackstyle.modalBackground}>
          <View style={Fallbackstyle.centerview}>
            <View style={Fallbackstyle.modalview}>
              <Image source={require('../../Assets/image/alert.png')} style={Fallbackstyle.imagsp} />
              <Text style={Fallbackstyle.font}>Are you sure you want to exit</Text>
              <Text style={Fallbackstyle.font}>Aadhar verification?</Text>
              <Text style={{ fontFamily: 'Open Sans', color: "#7E7E7E", top: 10 }}>If you exit, you will have to start your</Text>
              <Text style={{ fontFamily: 'Open Sans', color: "#7E7E7E", top: 10, marginBottom: 40 }}>Aadhaar verification process again</Text>
              <View style={{ flexDirection: 'row', gap: 30 }}>
                <TouchableOpacity onPress={handleYesPress}>
                  <View style={Fallbackstyle.button1}>
                    <Text style={Fallbackstyle.buttonText}>Yes</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={Fallbackstyle.button2}>
                    <Text style={Fallbackstyle.buttonText}>Close</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FallbackBottom;
