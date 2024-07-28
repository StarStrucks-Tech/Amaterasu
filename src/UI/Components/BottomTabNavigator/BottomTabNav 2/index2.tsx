import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/Screen1/index';
import Screen2 from '../Screens/Screen2/index';
import Screen3 from '../Screens/Screen3/index';
import Screen4 from '../Screens/Screen4/index';
import Screen5 from '../Screens/Screen5/index';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Screen1" component={Screen1} options={{ tabBarLabel: 'Home' }} />
    <Tab.Screen name="Screen2" component={Screen2} options={{ tabBarLabel: 'scan' }} />
    <Tab.Screen name="Screen3" component={Screen3} options={{ tabBarLabel: 'Transaction' }} />
    <Tab.Screen name="Screen4" component={Screen4} options={{ tabBarLabel: 'Deposit' }} />
    <Tab.Screen name="Screen5" component={Screen5} options={{ tabBarLabel: 'Profile' }} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
