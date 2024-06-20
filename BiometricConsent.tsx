import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PERMISSION_GRANTED = 'Permission Granted';
const SECURE_LOGIN_TEXT = 'Secure log in to your account';
const DEVICE_UNLOCK_TEXT = 'We use Device Unlock method to protect your account';
const WARNING_TEXT = 'By using your fingerprint or face ID to unlock your device and access the KUBAIR App, you agree to do so securely. Please note that adding other fingeprints or face IDs is not recommended and could result in a loss of financial data';
const BUTTON_TEXT = 'I Understand';

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
        console.log(PERMISSION_GRANTED);
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
            {/* Top image */}
            <Image source={require('./assets/top.png')} style={styles.image} />
            {/* Header text */}
            <View>
                <Text style={[styles.header, isDarkMode ? styles.darkHeader : styles.lightHeader]}>{SECURE_LOGIN_TEXT}</Text>
            </View>
            <View style={styles.align}>
                <Text style={[styles.topText, isDarkMode ? styles.darkTopText : styles.lightTopText]}>{DEVICE_UNLOCK_TEXT}</Text>
                <Image source={require('./assets/padlock.png')} style={styles.lock} />
            </View>
            <Text style={[styles.para, isDarkMode ? styles.darkPara : styles.lightPara]}>{WARNING_TEXT}</Text>
            {/* Button with arrow icon and text */}
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Image source={require('./assets/arrow.png')} style={styles.arrow} />
                <Text style={styles.buttontext}>{BUTTON_TEXT}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lightMode: {
        backgroundColor: '#fafce0',
    },
    darkMode: {
        backgroundColor: '#193d3b',
    },

    align: {
        justifyContent: "space-around",
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 18,


    },
    lock: {
        width: 22,
        height: 22,
        marginRight: 75,
        marginTop: 10,
    },
    header: {
        marginHorizontal: 30,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 18,

    },
    lightHeader: {
        color: '#333',
    },
    darkHeader: {
        color: '#fff',
    },
    topText: {
        fontSize: 18,
        fontWeight: 'light',
        marginBottom: 15,
        color: '#6c757d',
        textAlign: 'center',
        marginLeft: 30,
    },
    lightTopText: {
        color: '#6c757d',
    },
    darkTopText: {
        color: '#fff',
    },
    arrow: {
        height: 25,
        width: 40,
        marginRight: 35,
    },
    para: {
        marginHorizontal: 25,
        fontSize: 15,
        marginBottom: 20,
        color: '#495057',
        textAlign: 'center',
    },
    lightPara: {
        color: '#495057',
    },
    darkPara: {
        color: '#fff',
    },

    image: {
        alignSelf: 'center',
        width: 200,
        height: 190,
        marginVertical: 40,
        marginLeft: 50,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#c45435',
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal: 20,
        width: 300,
        height: 40,
        marginBottom: 10,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default BiometricConsent;