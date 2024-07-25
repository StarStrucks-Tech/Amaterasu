import React, { useEffect } from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {COLORS} from './src/UI/Components/BottomTabNavigator/Constants'
import BottomTabNavigator from './src/UI/Components/BottomTabNavigator/BottomTabNav 1/index1';
// If you are using the splash screen, keep this import, otherwise remove it.
// import SplashScreen from 'react-native-splash-screen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.BG,
  },
};

const App: React.FC = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // If you are using the splash screen, keep this line, otherwise remove it.
      // SplashScreen.hide();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={MyTheme}>
        <StatusBar barStyle="dark-content" />
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
  },
});

export default App;
