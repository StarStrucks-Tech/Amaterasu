// LoadingScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Loading...</Text>
      {/* Add any loading indicator or content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
