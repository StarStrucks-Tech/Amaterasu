import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Adhaardetails from './Source/UI/Aadhaardetails/Aadhaardetails'; 
import AdhaarConsent from './Source/UI/AadhaarConsentScreens/AadhaarConsent'; 
import LoadingScreen from './Source/UI/Screens/LoadingScreen'; 
import AadhaarOTPScreen from './Source/UI/AadhaarOTPScreen/AadhaarOtpScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AdhaarConsent"
          component={AdhaarConsent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Adhaardetails"
          component={Adhaardetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AadhaarOTPScreen"
          component={AadhaarOTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
