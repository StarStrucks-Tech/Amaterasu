/* eslint-disable prettier/prettier */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './src/UI/Components/SplashComponent/index'
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Splash);