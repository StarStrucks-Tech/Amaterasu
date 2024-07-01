import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Screen1 from './src/UI/Screens/Screen1'
const Stack = createNativeStackNavigator();

function App() {
  return (<NavigationContainer>
    <Stack.Navigator screenOptions={{
          headerShown: false, 
        }}>
      <Stack.Screen name="Screen1" component={Screen1}   />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
