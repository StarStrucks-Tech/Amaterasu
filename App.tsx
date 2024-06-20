import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button } from 'react-native';
import Adhaardetails from './Source/UI/Screens/Adhaardetails';
<<<<<<< HEAD
import AdhaarOTPdetail from './Source/UI/Screens/AdhaarOTPdetail';
import AdhaarConsent from './Source/UI/Screens/AdhaarConsent';
import LoadingScreen from './Source/UI/Components/LoadingScreen';
=======
import Adhaardetailss from './Source/UI/Screens/Adhaardetailss';
import HomeScreen from './Source/UI/Screens/HomeScreen';
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
<<<<<<< HEAD
          name="AdhaarConsent"
          component={AdhaarConsent}
=======
          name="HomeScreen"
          component={HomeScreen}
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Adhaardetails"
          component={Adhaardetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
<<<<<<< HEAD
          name="AdhaarOTPdetail"
          component={AdhaarOTPdetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
=======
          name="Adhaardetailss"
          component={Adhaardetailss}
>>>>>>> 5336404915f47d34f5406e6153b2223c4c316c7f
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFE4" }}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
    </View>
  );
}

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFE4" }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <Button title='Go to Home Page' onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFE4"
  },
});

export default App;
