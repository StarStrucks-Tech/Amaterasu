import React, { useState } from 'react';
import { View, Text, Image, Linking, Modal, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import { TermsConditionsConstants } from '../Constants';
import { IconTextClickableComponent } from '../../../Components/IconTextClickableComponent';
import { config } from '../Config';

const { TERMS_URL, SECURE_URL } = config;
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
            <Image source={require('../assets/termsConditions1.png')} style={styles.topImage} />
            <View >
                <Text style={styles.heading}>{TermsConditionsConstants.TITLE}</Text>
                <Text style={styles.topText}>{TermsConditionsConstants.SUBTITLE}</Text>
            </View>
            <View style={styles.consentRow}>
                <IconTextClickableComponent
                    buttonStyle={styles.termButton}
                    imageSource={require('../assets/terms.png')}
                    buttonText={TermsConditionsConstants.TERMS_BTN}
                    url={TERMS_URL}
                />
                <IconTextClickableComponent
                    buttonStyle={styles.secureButton}
                    imageSource={require('../assets/secure.png')}
                    buttonText={TermsConditionsConstants.SECURE_BTN}
                    url={SECURE_URL}
                />

            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked1} onValueChange={handleCheckboxChange1} tintColors={{true:'#d05f33'}} />
                <Text style={styles.text}>{TermsConditionsConstants.AGREEMENT}</Text>
            </View>
            <View style={styles.checkbox}>
                <CheckBox value={isChecked2} onValueChange={handleCheckboxChange2} tintColors={{true:'#d05f33'}} />
                <Text style={styles.text}>{TermsConditionsConstants.DATA_SHARE}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <Image source={require('../assets/arrow.png')} style={styles.arrow} />
                <Text style={styles.buttontext}>{TermsConditionsConstants.NEXT_BTN}</Text>
            </TouchableOpacity>
            <Modal visible={alertVisible} transparent={true}>
                <View style={styles.alertContainer}>
                    <View style={styles.alertContent}>
                        <Text style={styles.alertTitle}>{TermsConditionsConstants.ALERT_TITLE}</Text>
                        <Text style={styles.alertMessage}>{TermsConditionsConstants.ALERT_MSG}</Text>
                        <TouchableOpacity style={styles.okButton} onPress={handleOKPress}>
                            <Text style={styles.okButtonText}>{TermsConditionsConstants.OK_BTN}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};


export default TermsConditions;