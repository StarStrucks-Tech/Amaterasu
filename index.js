/* eslint-disable prettier/prettier */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import Flipcoin from './src/UI/Components/FlipCoin'
import Aadhaardetails from './src/UI/Screens/AadhaarDetailScreen/index'
import {name as appName} from './app.json';
import AadhaarOTPScreen from './src/UI/Screens/AadhaarOTPScreen/index'
import SecureComponent from './src/UI/Components/SecureComponent/'
import AadhaarConsentScreens from './src/UI/Screens/AadhaarConsentScreens/index';
AppRegistry.registerComponent(appName, () => AadhaarOTPScreen);
