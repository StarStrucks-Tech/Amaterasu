import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Style/OtherConsentStyles';
import { OtherConsentsConstants } from './Constants';
import { ConsentComponent } from '../../Components/ConsentScreenComp/OtherConsentComponent';

const constants = OtherConsentsConstants();
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
                <Text style={styles.topText}>{constants.PERMISSION_HEADER}</Text>
                <Text style={styles.para}>{constants.PERMISSION_PARAGRAPH}</Text>
            </View>
            <View style={styles.consentRow}>
                <ConsentComponent
                    containerStyle={styles.notificationsConsentContainer}
                    imageSource={require('./assets/notification_image.png')}
                    headerText={constants.NOTIFICATION_HEADER}
                    text={constants.NOTIFICATION_TEXT}
                />
                <ConsentComponent
                    containerStyle={styles.locationConsentContainer}
                    imageSource={require('./assets/location_image2.png')}
                    headerText={constants.LOCATION_HEADER}
                    text={constants.LOCATION_TEXT}
                />

            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
                <Text style={styles.agreeText}>{constants.AGREEMENT_TEXT}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttontext}>{constants.NEXT_BTN_TEXT}</Text>
            </TouchableOpacity>
            <Modal visible={alertVisible} transparent={true}>
                <View style={styles.alertContainer}>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>{constants.PERMISSION_REQUIRED_HEADER}</Text>
                        <Text style={styles.alertMessage}>{constants.PERMISSION_ALERT_MESSAGE}</Text>
                        <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
                            <Text style={styles.okButtonText}>{constants.OK_BTN_TEXT}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default OtherConsents;