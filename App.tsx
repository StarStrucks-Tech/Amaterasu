import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button } from 'react-native';
import Adhaardetails from './Source/UI/Screens/Adhaardetails';
import Adhaardetailss from './Source/UI/Screens/Adhaardetailss';
import HomeScreen from './Source/UI/Screens/HomeScreen';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Adhaardetails"
          component={Adhaardetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Adhaardetailss"
          component={Adhaardetailss}
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
