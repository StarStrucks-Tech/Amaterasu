import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../Screens/Screen1/index';
import Screen2 from '../Screens/Screen2/index';
import Screen3 from '../Screens/Screen3/index';
import Screen4 from '../Screens/Screen4/index';
import Screen5 from '../Screens/Screen5/index';
import { COLORS } from '../Constants';
import { Image, View } from 'react-native';
import AvatarCircle from '../../AvatarCircle';
import { styles } from './styles1';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        let imageSource: any = null;

        switch (route.name) {
          case 'Screen1':
            imageSource = focused ? require('./../../../../Assets/home-active.png') : require('./../../../../Assets/home.png');
            break;
          case 'Screen2':
            imageSource = focused ? require('./../../../../Assets/qrcode-active.png') : require('./../../../../Assets/scan.png');
            break;
          case 'Screen3':
            imageSource = focused ? require('../../../../Assets/logokubair-active.png') : require('./../../../../Assets/logokubair.png');
            break;
          case 'Screen4':
            imageSource = focused ? require('./../../../../Assets/Transaction-active.png') : require('./../../../../Assets/Transaction.png');
            break;
          case 'Screen5':
            imageSource = focused ? require('./../../../../Assets/profile-active.png') : require('./../../../../Assets/profile.png');
            break;
          default:
            imageSource = null;
            break;
        }

        if (route.name === 'Screen3') {
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
            {imageSource && (
              <Image
                source={imageSource}
                style={{ width: size, height: size }}
              />
            )}
          </View>
        );
      },
      tabBarActiveTintColor: COLORS.TEXT,
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
