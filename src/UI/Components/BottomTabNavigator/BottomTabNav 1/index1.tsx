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
     // Import the icon set you want to use
//import Icons from 'react-native-vector-icons/AntDesign'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        let iconName: string = '';

        switch (route.name) {
          case 'Screen1':
            iconName = focused ? 'home' : 'home';
            break;
          case 'Screen2':
            iconName = focused ? 'qr-code' : 'qr-code';
            break;
          case 'Screen3':
            iconName = ''; // Screen3 will use image source
            break;
          case 'Screen4':
            iconName = focused ? 'account-balance-wallet' : 'account-balance-wallet';
            break;
          case 'Screen5':
            iconName = focused ? 'person' : 'person';
            break;
          default:
            iconName = '';
            break;
        }

        if (route.name === 'Screen3') {
          const imageSource = focused
            ? require('../../../../Assets/logokubair-active.png')
            : require('./../../../../Assets/logokubair.png');
          return (
            <View style={styles.centerIconContainer}>
              <View style={styles.centerIconWrapper}>
                <AvatarCircle radius={size * 1.3} imageSource={imageSource} />
              </View>
            </View>
          );
        }

        return (
          <View style={styles.tabIconContainer}>
            {iconName && (
              <Icon
                name={iconName}
                size={size}
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
