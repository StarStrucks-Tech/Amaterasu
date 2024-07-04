/* eslint-disable prettier/prettier */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SecureComponent from './src/UI/Components/SecureComponent/index'
import AadhaarConsentScreens from './src/UI/Screens/AadhaarConsentScreens/index';
AppRegistry.registerComponent(appName, () => SecureComponent);
