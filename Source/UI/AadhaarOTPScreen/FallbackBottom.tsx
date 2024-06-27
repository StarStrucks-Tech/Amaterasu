import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, PixelRatio } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native'; // Import useNavigation and useIsFocused hooks
import Fallbackstyle from "./Styles/Fallbackstyle";
import TextComponent from "../Components/Textcomponents";

const FallbackBottom = ({ showModal, setShowModal }) => {
  const navigation = useNavigation(); // Initialize navigation hook
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
              <Text style={Fallbackstyle.font}>{TextComponent.FallbackTexttitle}</Text>
              <Text style={{ fontFamily: 'Open Sans', color: "#7E7E7E",marginTop:PixelRatio.getPixelSizeForLayoutSize(7) }}>{TextComponent.Fallbacksubhead}</Text>
              
              <View style={{ flexDirection: 'row', gap: PixelRatio.getPixelSizeForLayoutSize(10),
                marginTop:PixelRatio.getPixelSizeForLayoutSize(6) ,}}>
                <TouchableOpacity onPress={handleYesPress}>
                  <View style={Fallbackstyle.button1}>
                    <Text style={Fallbackstyle.buttonText}>{TextComponent.Yes}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={Fallbackstyle.button2}>
                    <Text style={Fallbackstyle.buttonText}>{TextComponent.Close}</Text>
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
