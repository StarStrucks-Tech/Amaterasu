import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button } from 'react-native';
import Adhaardetails from './Source/UI/Screens/Adhaardetails';
import AdhaarOTPdetail from './Source/UI/Screens/AdhaarOTPdetail';
import AdhaarConsent from './Source/UI/Screens/AdhaarConsent';
import LoadingScreen from './Source/UI/Components/LoadingScreen';
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
          name="AdhaarOTPdetail"
          component={AdhaarOTPdetail}
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
