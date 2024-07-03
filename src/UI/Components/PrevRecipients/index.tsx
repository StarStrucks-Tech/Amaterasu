import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import BoxData from './BoxData';

const PrevRecipient = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.headingText}>Previous Recipients</Text>
      <View style={styles.content}>
       
        <BoxData />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 61,
    backgroundColor: '#FFFFE4',
    justifyContent: 'center',
    alignItems: 'center', 
  },
 content: {
  justifyContent: 'center',
  alignItems: 'center',
  },
  headingText: {
    alignSelf: 'flex-start',
    marginLeft: 32,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15.98,
    marginBottom: 10
 
  },
});

export default PrevRecipient;