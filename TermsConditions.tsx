import React, { useState } from 'react';
import { View, Text, Image, Linking, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

/**
 * Define constants for URLs, button texts, and alert messages
 */
const TERMS_URL = 'https://cdn.websitepolicies.com/wp-content/uploads/2017/06/terms-and-conditions-template-1038x1536.png';
const SECURE_URL = 'https://www.docformats.com/wp-content/uploads/2023/11/Pre-Order-Terms-and-Conditions-Template-Word-Google-Docs.png';

const TERMS_BTN = 'KUBAIR Terms';
const SECURE_BTN = 'KUBAIR Secure';
const TITLE = 'Understand our Terms & Conditions';
const SUBTITLE = 'Written in a way humans can understand & relate';
const AGREEMENT = 'I agree to the above terms & conditions that I am Indian citizen, my country of tax residence is India and I am not (nor am related to) a politically exposed person';
const DATA_SHARE = 'I agree to share personal data with KUBAIR and partners, to be accessed, stored & used for providing services';
const NEXT_BTN = 'Next';
const ALERT_TITLE = 'Permission Required';
const ALERT_MSG = 'Please check the checkbox to grant permission.';
const OK_BTN = 'OK';

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
                <Text style={styles.termsSecureButtonText}>{TERMS_BTN}</Text>
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
                <Text style={styles.termsSecureButtonText}>{SECURE_BTN}</Text>
            </TouchableOpacity>
        </View>
    );
};

/**
 * Terms and Conditions component
 */
const TermsConditions = () => {
    /**
   * State variables for checkboxes and alert visibility
   */
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    /**
   * Handle checkbox change events
   */
    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
    };
    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
    };

   /**
   * Handle button press event
   */
    const handleButtonPress = () => {
        if (!isChecked1 || !isChecked2) {
            setAlertVisible(true);
            
        } else {
            //navigate to next Screen
            console.log('Terms & Conditions Accepted!');
        }
    };

     /**
   * Handle OK press event
   */
    const handleOKPress = () => {
        setAlertVisible(false);
    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/termsConditions.png')} style={styles.topImage} />
            <View >
                <Text style={styles.heading}>{TITLE}</Text>
                <Text style={styles.topText}>{SUBTITLE}</Text>
            </View>
            <View style={styles.consentRow}>
                <Terms />
                <Secure />

            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked1} onValueChange={handleCheckboxChange1} />
                <Text style={styles.text}>{AGREEMENT}</Text>
            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked2} onValueChange={handleCheckboxChange2} />
                <Text style={styles.text}>{DATA_SHARE}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Image source={require('./assets/arrow.png')} style={styles.arrow} />
                <Text style={styles.buttontext}>{NEXT_BTN}</Text>
            </TouchableOpacity>
            <Modal visible={alertVisible} transparent={true}>
                <View style={styles.alertContainer}>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>{ALERT_TITLE}</Text>
                        <Text style={styles.alertMessage}>{ALERT_MSG}</Text>
                        <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
                            <Text style={styles.okButtonText}>{OK_BTN}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fafce0',
        padding: 5,
    },
    heading: {
        marginHorizontal: 90,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,

    },
    buttonImage: {
        height: 22,
        width: 25,
        marginRight: 10,
    },
    topText: {
        marginHorizontal: 30,
        fontSize: 13,
        paddingHorizontal: 30,
        color: '#6c758d',
        textAlign: 'center'
    },
    consentRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    termButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#495057',
        padding: 5,
        borderColor: '#f4f1de',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 135,
        marginHorizontal: 23,
    
    },
    secureButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#495057',
        padding: 5,
        borderColor: '#f4f1de',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 135,
        margin: 10,
    },
    termsSecureButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
    },
    image: {
        width: 35,
        height: 35,
        marginRight: 10,
        alignSelf: 'center'
    },
    topImage: {
        alignSelf: 'center',
        width: 250,
        height: 240,
    },
    text: {
        flex: 1,
        fontSize: 11,
        color: '#333',
        marginLeft: 10
    },
    checkbox: {
        justifyContent: 'flex-end',
        marginHorizontal: 15,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#c45435',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        width: 270,
        height: 33,
        marginBottom: 10,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 35

    },
    arrow: {
        height: 25,
        width: 30,
        marginRight: 40,
    },
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    alertContent: {
        backgroundColor: '#193d3b',
        padding: 20,
        height: 180,
        width: 300,
        borderRadius: 20,
        paddingVertical: 10,
    },
    alertTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
    },
    alertMessage: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 5,
        marginHorizontal: 20,
    },
    okButton: {
        backgroundColor: '#c45435',
        borderRadius: 10,
        marginLeft: 180,
        marginTop: 30,
        width: 80,
        height: 35,
    },
    okButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
});
export default TermsConditions;