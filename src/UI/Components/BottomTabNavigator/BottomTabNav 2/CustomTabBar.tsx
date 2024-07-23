import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import AvatarCircle from '../../AvatarCircle';
import { styles } from './styles2';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBarOuterContainer}>
      <View style={styles.tabBarOvalContainer}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let imageSource: any = null;
          switch (route.name) {
            case 'Screen1':
              imageSource = isFocused
                ? require('../../../../Assets/home-active.png')
                : require('../../../../Assets/home.png');
              break;
            case 'Screen2':
              imageSource = isFocused
                ? require('../../../../Assets/qrcode-active.png')
                : require('../../../../Assets/scan.png');
              break;
            case 'Screen3':
              imageSource = isFocused
                ? require('../../../../Assets/transfer-active.png')
                : require('../../../../Assets/transfer.png');
              break;
            case 'Screen4':
              imageSource = isFocused
                ? require('../../../../Assets/request-active.png')
                : require('../../../../Assets/request.png');
              break;
            case 'Screen5':
              imageSource = isFocused
                ? require('../../../../Assets/profile-active.png')
                : require('../../../../Assets/profile.png');
              break;
            default:
              imageSource = null;
              break;
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}>
              <View
                style={[
                  styles.innerContainer,
                  isFocused && styles.activeInnerContainer,
                ]}>
                <AvatarCircle radius={10} imageSource={imageSource} />
                {isFocused && <Text style={styles.tabLabel}>{label}</Text>}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};


export default CustomTabBar;
