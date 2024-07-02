import React, { useState } from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import { OtherConsentsConstants } from '../Constants';
import { ConsentComponent } from '../../../Components/ConsentScreenComp/OtherConsentComponent';

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
            <Image source={require('../assets/Boat.png')} style={styles.permission} />
            <View >
                <Text style={styles.topText}>{OtherConsentsConstants.PERMISSION_HEADER}</Text>
                <Text style={styles.para}>{OtherConsentsConstants.PERMISSION_PARAGRAPH}</Text>
            </View>
            <View style={styles.consentRow}>
                <ConsentComponent
                    containerStyle={styles.notificationsConsentContainer}
                    imageSource={require('../assets/notification_image.png')}
                    headerText={OtherConsentsConstants.NOTIFICATION_HEADER}
                    text={OtherConsentsConstants.NOTIFICATION_TEXT}
                />
                <ConsentComponent
                    containerStyle={styles.locationConsentContainer}
                    imageSource={require('../assets/location_image2.png')}
                    headerText={OtherConsentsConstants.LOCATION_HEADER}
                    text={OtherConsentsConstants.LOCATION_TEXT}
                />

            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked} onValueChange={handleCheckboxChange} tintColors={{true:'#d05f33'}}/>
                <Text style={styles.agreeText}>{OtherConsentsConstants.AGREEMENT_TEXT}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Text style={styles.buttontext}>{OtherConsentsConstants.NEXT_BTN_TEXT}</Text>
            </TouchableOpacity>
            <Modal visible={alertVisible} transparent={true}>
                <View style={styles.alertContainer}>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>{OtherConsentsConstants.PERMISSION_REQUIRED_HEADER}</Text>
                        <Text style={styles.alertMessage}>{OtherConsentsConstants.PERMISSION_ALERT_MESSAGE}</Text>
                        <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
                            <Text style={styles.okButtonText}>{OtherConsentsConstants.OK_BTN_TEXT}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
export default OtherConsents;