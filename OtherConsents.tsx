import React, { useState } from 'react';
import { View, Text, Image, Modal, Linking, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

/**
 * Define constants for texts and alert messages
 */
const NOTIFICATION_HEADER = 'Notifications permission';
const LOCATION_HEADER = 'Location permission';
const NOTIFICATION_TEXT = 'We need your permission to send you notifications.';
const LOCATION_TEXT = 'We need your location to provide you with a better experience.';
const PERMISSION_REQUIRED_HEADER = 'Permission Required';
const PERMISSION_ALERT_MESSAGE = 'Please check the checkbox to grant permission.';
const OK_BTN_TEXT = 'OK';
const NEXT_BTN_TEXT = 'Next';
const AGREEMENT_TEXT = 'I agree to the terms and conditions';
const PERMISSION_HEADER = 'We need your permission';
const PERMISSION_PARAGRAPH = 'To have a smooth account creation process with no hiccups and safeguard your account';

/**
 * LocationConsent component
 */
const LocationConsent = () => {

    return (
        <View style={styles.locationConsentContainer}>
            <Image source={require('./assets/location_image2.png')} style={styles.image} />
            <Text style={styles.header}>{LOCATION_HEADER}</Text>
            <Text style={styles.text}>{LOCATION_TEXT}</Text>
        </View>
    );
};

/**
 * NotificationsConsent component
 */
const NotificationsConsent = () => {
    return (
        <View style={styles.notificationsConsentContainer}>
            <Image source={require('./assets/notification_image.png')} style={styles.image} />
            <Text style={styles.header}>{NOTIFICATION_HEADER}</Text>
            <Text style={styles.text}>{NOTIFICATION_TEXT}</Text>
        </View>
    );
};

/**
 * OtherConsents component
 */
const OtherConsents = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);

    /**
     * Handle checkbox change
     */
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    /**
   * Handle button press
   */
    const handleButtonPress = () => {
        if (isChecked) {
            //navigate to next Screen
            console.log('Permission granted!');
        } else {
            setAlertVisible(true);
        }
    };

    /**
     * Handle OK press
     */
    const handleOKPress = () => {
        setAlertVisible(false);
    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/Boat.png')} style={styles.permission} />
            <View >
                <Text style={styles.topText}>{PERMISSION_HEADER}</Text>
                <Text style={styles.para}>{PERMISSION_PARAGRAPH}</Text>
            </View>
            <View style={styles.consentRow}>
                <NotificationsConsent />
                <LocationConsent />

            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
                <Text style={styles.agreeText}>{AGREEMENT_TEXT}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttontext}>{NEXT_BTN_TEXT}</Text>
            </TouchableOpacity>
            <Modal visible={alertVisible} transparent={true}>
                <View style={styles.alertContainer}>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>{PERMISSION_REQUIRED_HEADER}</Text>
                        <Text style={styles.alertMessage}>{PERMISSION_ALERT_MESSAGE}</Text>
                        <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
                            <Text style={styles.okButtonText}>{OK_BTN_TEXT}</Text>
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
        paddingBottom: 10,
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,

    },
    para: {
        marginHorizontal: 30,
        fontSize: 15,
        marginBottom: 5,
        color: '#333',
        textAlign: 'center'
    },
    consentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    locationConsentContainer: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 10,

    },
    notificationsConsentContainer: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        marginHorizontal: 10,
    },
    image: {
        width: 25,
        height: 25,
        alignSelf: 'center'
    },
    permission: {
        alignSelf: 'center',
        width: 360,
        height: 250,
    },
    text: {
        fontSize: 11,
        color: '#333',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    checkbox: {
        justifyContent: 'flex-end',
        marginLeft: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    button: {
        backgroundColor: '#c45435',
        borderRadius: 10,
        paddingHorizontal: 20,
        width: 280,
        height: 35,

    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    agreeText: {
        flex: 1,
        fontSize: 13,
        color: '#333',
        marginLeft: 10
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
export default OtherConsents;