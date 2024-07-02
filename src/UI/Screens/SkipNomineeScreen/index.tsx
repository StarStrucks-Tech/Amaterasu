import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles';
import Color from '../../../Configs/color';
import CheckBox from 'react-native-check-box';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SkipNomineeScreen = (props: SkipNomineeScreenProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skip adding a nominee?</Text>

      <Text style={styles.description}>
        We suggest adding a nominee now. It enables Bank to make settlements to nominee, without 
        insisting additional legal documents, in case of unfortunate event of your death
      </Text>
      
      <View style={styles.checkboxLabel}>
      <CheckBox 
        isChecked={isSelected}
        rightText={"I understand & want to continue opening a Saving Account without a nominee"}
        rightTextStyle={{
          flex: 1,
          fontSize: 14,
          color: Colors.Black, // Adjust this to match your color scheme
        }}
        style={{
          flex: 1,
          padding: 10,
          marginBottom: 20,
        }}
        onClick={() => {
          console.log("***********", isSelected);
          setIsSelected(!isSelected);
        }}
        checkBoxColor={Colors.Orange} // Adjust this to match your color scheme
      />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.skipButton]} 
          onPress={props.onSkip}
        >
          <Text style={styles.buttonText}>Yes & Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.closeButton]} 
          onPress={props.onClose}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

type SkipNomineeScreenProps = {
   onSkip?: () => void;
   onClose?: () => void;
}

export default SkipNomineeScreen;