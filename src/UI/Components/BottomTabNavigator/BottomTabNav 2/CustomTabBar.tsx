import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons
import { styles } from './styles2';

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabBarOuterContainer}>
      <View style={styles.tabBarOvalContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
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

          let iconName: string = '';
          switch (route.name) {
            case 'Screen1':
              iconName = isFocused ? 'home' : 'home';
              break;
            case 'Screen2':
              iconName = isFocused ? 'qr-code' : 'qr-code';
              break;
            case 'Screen3':
              iconName = isFocused ? 'swap-horiz' : 'swap-horiz';
              break;
            case 'Screen4':
              iconName = isFocused ? 'request-quote' : 'request-quote';
              break;
            case 'Screen5':
              iconName = isFocused ? 'person' : 'person-outline';
              break;
            default:
              iconName = '';
              break;
          }

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
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
                <Icon
                  name={iconName}
                  size={30}
                  color={isFocused ? 'black' : 'gray'}
                />
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
