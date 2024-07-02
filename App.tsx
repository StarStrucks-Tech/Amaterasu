import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Adhaardetails from './Source/UI/Aadhaardetails/Aadhaardetails'; 
import AdhaarConsent from './Source/UI/AadhaarConsentScreens/AadhaarConsent'; 
import LoadingScreen from './Source/UI/Screens/LoadingScreen'; 
import AadhaarOTPScreen from './Source/UI/AadhaarOTPScreen/AadhaarOtpScreen';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TabNavigation from './src/UI/Components/TabNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { OnboardingRpcCaller } from './src/Rpc/OnboardingRpcCaller';

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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // Enabling Text Encoder for safe RPC Calls
  global.TextEncoder = require('text-encoding').TextEncoder;
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
