import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LivelinessScreen from './src/UI/Screens/Liveliness screens/LivelinessScreen';
import styles from './src/UI/Screens/Liveliness screens/styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LivelinessScreen />
    </SafeAreaView>
  );
};

export default App;
