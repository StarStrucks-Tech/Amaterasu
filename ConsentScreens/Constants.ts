/**
* Define constants for texts and alert messages
*/

//Constants for Biometric Consent SCreen
export function BiometricConsentConstants() {
    return {
        PERMISSION_GRANTED: 'Permission Granted',
        SECURE_LOGIN_TEXT: 'Secure log in to your account',
        DEVICE_UNLOCK_TEXT: 'We use Device Unlock method to protect your account',
        WARNING_TEXT: 'By using your fingerprint or face ID to unlock your device and access the KUBAIR App, you agree to do so securely. Please note that adding other fingeprints or face IDs is not recommended and could result in a loss of financial data',
        BUTTON_TEXT: 'I Understand',

    };
}

//Constants for Other Consents Screen
export function OtherConsentsConstants() {
    return {
        NOTIFICATION_HEADER: 'Notifications permission',
        LOCATION_HEADER: 'Location permission',
        NOTIFICATION_TEXT: 'We need your permission to send you notifications.',
        LOCATION_TEXT: 'We need your location to provide you with a better experience.',
        PERMISSION_REQUIRED_HEADER: 'Permission Required',
        PERMISSION_ALERT_MESSAGE: 'Please check the checkbox to grant permission.',
        OK_BTN_TEXT: 'OK',
        NEXT_BTN_TEXT: 'Next',
        AGREEMENT_TEXT: 'I agree to the terms and conditions',
        PERMISSION_HEADER: 'We need your permission',
        PERMISSION_PARAGRAPH: 'To have a smooth account creation process with no hiccups and safeguard your account',

    };
}


//Constants for Terms & Conditions Screen
export function TermsConditionsConstants() {
    return {
        TERMS_BTN: 'KUBAIR Terms',
        SECURE_BTN: 'KUBAIR Secure',
        TITLE: 'Understand our Terms & Conditions',
        SUBTITLE: 'Written in a way humans can understand & relate',
        AGREEMENT: 'I agree to the above terms & conditions that I am Indian citizen, my country of tax residence is India and I am not (nor am related to) a politically exposed person',
        DATA_SHARE: 'I agree to share personal data with KUBAIR and partners, to be accessed, stored & used for providing services',
        NEXT_BTN: 'Next',
        ALERT_TITLE: 'Permission Required',
        ALERT_MSG: 'Please check the checkbox to grant permission.',
        OK_BTN: 'OK',
    };
}

