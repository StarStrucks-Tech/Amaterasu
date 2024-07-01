import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './Style/BiometricConsentStyles';
import { BiometricConsentConstants } from './Constants';

const constants = BiometricConsentConstants();
/**
 * BiometricConsent component
 * Displays a consent screen for using biometric authentication
 */
const BiometricConsent = () => {
    // State to toggle between light and dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    /**
   * handleButtonPress
   * Logs a message to the console when the button is pressed
   */
    const handleButtonPress = () => {
        console.log(constants.PERMISSION_GRANTED);
    };

    /**
  * handleToggle
  * Toggles the isDarkMode state variable
  */
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };


    return (
        <View style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>

            <View style={styles.alignImage}>
                <Image source={require('./assets/top1.png')} style={styles.image} />
                <Text style={[styles.header, isDarkMode ? styles.darkHeader : styles.lightHeader]}>{constants.SECURE_LOGIN_TEXT}</Text>
            </View>
            <View style={styles.align}>
                <Text style={[styles.topText, isDarkMode ? styles.darkTopText : styles.lightTopText]}>{constants.DEVICE_UNLOCK_TEXT}</Text>
                <Image source={require('./assets/padlock.png')} style={styles.lock} />
            </View>
            <Text style={[styles.para, isDarkMode ? styles.darkPara : styles.lightPara]}>{constants.WARNING_TEXT}</Text>
            {/* Button with arrow icon and text */}
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Image source={require('./assets/arrow.png')} style={styles.arrow} />
                <Text style={styles.buttontext}>{constants.BUTTON_TEXT}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BiometricConsent;