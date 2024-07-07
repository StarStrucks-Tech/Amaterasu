import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import constants from '../../../../UI-Constants/Constant.json'; // Adjusted import path
import styles from './styles';

const { width, height } = Dimensions.get('window');

const StaticScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/screenlight.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{constants.TextConstants.TITLE}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{constants.TextConstants.BUTTON_TEXT}</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>{constants.TextConstants.FOOTER_TEXT}</Text>
    </View>
  );
};

export default StaticScreen;
