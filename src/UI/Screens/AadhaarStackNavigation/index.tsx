import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Aadhaardetails from '../AadhaarDetailScreen';
import AadhaarConsentScreens from '../AadhaarConsentScreens';
//import LoadingScreen from './src/UI/Screens/LoadingScreen';
//import AadhaarOTPScreen from './src/UI/Screens/AadhaarOTPScreen';

const Stack = createNativeStackNavigator();

function AadhaarStackNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AadhaarConsentScreens">
          <Stack.Screen
              name="AadhaarConsentScreens"
              component={AadhaarConsentScreens}
              options={{ headerShown: false }}
          />
           <Stack.Screen
              name="Aadhaardetails"
              component={Aadhaardetails}
              options={{ headerShown: false }}
          />{/*
          <Stack.Screen
              name="AadhaarOTPScreen"
              component={AadhaarOTPScreen}
              options={{ headerShown: false }}
          />
          <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default AadhaarStackNavigation;
