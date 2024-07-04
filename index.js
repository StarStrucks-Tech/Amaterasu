/* eslint-disable prettier/prettier */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AadhaarConsentScreens from './src/UI/Screens/AadhaarConsentScreens/index';
AppRegistry.registerComponent(appName, () => AadhaarConsentScreens);
