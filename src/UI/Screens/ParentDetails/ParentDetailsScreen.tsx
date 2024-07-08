import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';


//icons
// import Icons from 'react-native-vector-icons/FontAwesome';


const ParentDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text>{'<'}</Text>
      </TouchableOpacity>

      <Image
        source={require('../ParentDetails/image.png')}
        style={styles.familyImage}
        resizeMode="contain"
      />

      <Text style={styles.title}>Tell us about your folks</Text>

      <Text style={styles.subtitle}>
        To provide services, our partners require this information const icon{' '}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Father's Full Name                                40/40"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Mother's Full Name                              40/40"
      />

      <View style={styles.warningBox}>
        <Text style={styles.warningText}>
          One of your parents' names must be exactly as they appear on your
          Aadhaar card
        </Text>
      </View>

      <TouchableOpacity style={styles.addNomineeButton}>
        <Text style={styles.addNomineeText}>+ Add Nominee</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFE4',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  familyImage: {
    width: 240,
    height: 150,
    alignSelf: 'center',
    marginTop: 50,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#000000',
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 220,
  },
  input: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 2,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
  },

  warningBox: {
    backgroundColor: '#E4C3CF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    flexDirection: 'row',
  },
  warningText: {
    color: '#895966',
    fontWeight: 'bold',
  },
  addNomineeButton: {
    marginTop: 20,
  },
  addNomineeText: {
    color: '#000000',
  },
  nextButton: {
    backgroundColor: '#D05F33',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 70,
    width: 140,
    height: 31,
    paddingTop: 5,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ParentDetailsScreen;
