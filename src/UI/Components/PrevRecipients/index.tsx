import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import BoxData from './BoxData';
import styles from './styles';

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


export default PrevRecipient;