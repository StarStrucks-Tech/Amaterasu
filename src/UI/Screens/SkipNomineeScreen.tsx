import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './SkipNominee'

const SkipNomineeScreen = ({ onSkip, onClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skip adding a nominee?</Text>

      <Text style={styles.description}>
        We suggest adding a nominee now. It enables Bank to make settlements to nominee, without 
        insisting additional legal documents, in case of unfortunate event of your death
      </Text>

      <TouchableOpacity 
        style={styles.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}
      >
        <View style={[styles.checkbox, isChecked && styles.checked]} />
        <Text style={styles.checkboxLabel}>
          I understand & want to continue opening a Saving Account without a nominee
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.skipButton]} 
          onPress={onSkip}

        >
          <Text style={styles.buttonText}>Yes & Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.closeButton]} 
          onPress={onClose}
        >
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default SkipNomineeScreen;