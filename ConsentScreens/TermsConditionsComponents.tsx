import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './TermsConditionsStyles';
import { TermsConditionsConstants } from './Constants';
import { config } from './Config';

/**
 * Define constants for URLs, button texts, and alert messages
 */

const constants = TermsConditionsConstants();
const { TERMS_URL, SECURE_URL} = config;

/**
 * Terms component
 */
const Terms = () => {
    /**
   * Handle terms press event
   */
    const handleTermsPress = () => {
        Linking.openURL(TERMS_URL);
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.termButton} onPress={handleTermsPress}>
                <Image source={require('./assets/terms.png')} style={styles.buttonImage} />
                <Text style={styles.termsSecureButtonText}>{constants.TERMS_BTN}</Text>
            </TouchableOpacity>
        </View>
    );
};

/**
 * Secure component
 */
const Secure = () => {
    /**
   * Handle secure press event
   */
    const handleSecurePress = () => {
        Linking.openURL(SECURE_URL);
    };

    return (
        <View style={{ flex: 1 }} >
            <TouchableOpacity style={styles.secureButton} onPress={handleSecurePress}>
                <Image source={require('./assets/secure.png')} style={styles.buttonImage} />
                <Text style={styles.termsSecureButtonText}>{constants.SECURE_BTN}</Text>
            </TouchableOpacity>
        </View>
    );
};

export {Terms, Secure};