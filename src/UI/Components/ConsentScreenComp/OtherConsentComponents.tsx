import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from '../../Screens/ConsentScreens/Style/OtherConsentStyles';
import { OtherConsentsConstants } from '../../Screens/ConsentScreens/Constants';

const constants = OtherConsentsConstants();

/**
 * LocationConsent component
 */
const LocationConsent = () => {

    return (
        <View style={styles.locationConsentContainer}>
            <Image source={require('../../Screens/ConsentScreens/assets/location_image2.png')} style={styles.image} />
            <Text style={styles.header}>{constants.LOCATION_HEADER}</Text>
            <Text style={styles.text}>{constants.LOCATION_TEXT}</Text>
        </View>
    );
};

/**
 * NotificationsConsent component
 */
const NotificationsConsent = () => {
    return (
        <View style={styles.notificationsConsentContainer}>
            <Image source={require('../../Screens/ConsentScreens/assets/notification_image.png')} style={styles.image} />
            <Text style={styles.header}>{constants.NOTIFICATION_HEADER}</Text>
            <Text style={styles.text}>{constants.NOTIFICATION_TEXT}</Text>
        </View>
    );
};

export { LocationConsent, NotificationsConsent };