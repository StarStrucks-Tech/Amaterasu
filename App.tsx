
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SplashScreen from './src/ui/screens/SplashScreen'
function App(): React.JSX.Element {
  // Enabling Text Encoder for safe RPC Calls
  global.TextEncoder = require('text-encoding').TextEncoder;
  
  return (
  <SafeAreaView style={styles.safeArea} >
    <View style={styles.container}>

    <SplashScreen/>
    </View>
  </SafeAreaView>  
    );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;


