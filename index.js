/* eslint-disable prettier/prettier */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import Aadhaardetails from './src/UI/Screens/AadhaarDetailScreen/index'
import {name as appName} from './app.json';
import SecureComponent from './src/UI/Components/SecureComponent/'
import AadhaarConsentScreens from './src/UI/Screens/AadhaarConsentScreens/index';
AppRegistry.registerComponent(appName, () => Aadhaardetails);
