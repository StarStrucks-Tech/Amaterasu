import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Settings" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
