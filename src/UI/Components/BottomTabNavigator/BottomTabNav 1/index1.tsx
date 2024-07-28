import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/Screen1/index';
import Screen2 from '../Screens/Screen2/index';
import Screen3 from '../Screens/Screen3/index';
import Screen4 from '../Screens/Screen4/index';
import Screen5 from '../Screens/Screen5/index';
import { COLORS } from '../Constants';
import { View } from 'react-native';
import AvatarCircle from '../../AvatarCircle';
import { styles } from './styles1';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName: string = '';
        let iconSize = focused ? size * 1.3 : size; // Enlarge the size for the focused icon

        switch (route.name) {
          case 'Screen1':
            iconName = 'home';
            break;
          case 'Screen2':
            iconName = 'qr-code';
            break;
          case 'Screen3':
            iconName = ''; // Screen3 will use image source
            break;
          case 'Screen4':
            iconName = 'account-balance-wallet';
            break;
          case 'Screen5':
            iconName = 'person';
            break;
          default:
            iconName = '';
            break;
        }

        if (route.name === 'Screen3') {
          const imageSource = require('../../../../Assets/images/applogo.png');
          return (
            <View style={[styles.centerIconContainer]}>
              <View style={styles.centerIconWrapper}>
                <AvatarCircle
                  radius={focused ? size * 1.6 : size * 1.3} // Enlarge the radius when focused
                  imageSource={imageSource}
       
                />
              </View>
            </View>
          );
        }

        return (
          <View style={styles.tabIconContainer}>
            {iconName && (
              <Icon
                name={iconName}
                size={iconSize}
                color={color}
              />
            )}
          </View>
        );
      },
      tabBarActiveTintColor: COLORS.Incolor,
      tabBarInactiveTintColor: COLORS.TEXT,
      tabBarLabel: () => null, // To hide the labels
      tabBarStyle: {
        paddingBottom: 5, // Adjust this value to provide space at the bottom
        height: 95, // Adjust the height to make room for the lifted icon
        backgroundColor: COLORS.BGcolor, // Set the background color of the tab bar
      },
    })}
  >
    <Tab.Screen name="Screen1" component={Screen1} />
    <Tab.Screen name="Screen2" component={Screen2} />
    <Tab.Screen name="Screen3" component={Screen3} />
    <Tab.Screen name="Screen4" component={Screen4} />
    <Tab.Screen name="Screen5" component={Screen5} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
