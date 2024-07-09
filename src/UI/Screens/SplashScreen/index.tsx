import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import constants from '../../../UI-Constants/Constant.json';
import styles from './styles';

// Destructure width and height from the window dimensions
const { width, height } = Dimensions.get('window');

/**
 * StaticScreen Component
 * 
 * This component displays a static screen with an image, a title, a button, and footer text.
**/

const StaticScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require("../assets/applogo.png")}
        style={styles.image}
      />
      {/* Title Text */}
      <Text style={styles.title}>{constants.TextConstants.TITLE}</Text>
      {/* Button with Text */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{constants.TextConstants.BUTTON_TEXT}</Text>
      </TouchableOpacity>
      {/* Footer Text */}
      <Text style={styles.footerText}>{constants.TextConstants.FOOTER_TEXT}</Text>
    </View>
  );
};

export default StaticScreen;
