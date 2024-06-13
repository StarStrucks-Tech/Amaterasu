import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from '@react-navigation/native';

const FallbackBottom = ({ showModal, setShowModal }) => {
  const navigation = useNavigation();

  const handleYesPress = () => {
    // Navigate to HomeScreen
    navigation.navigate('HomeScreen');
  };

  return (
    <Modal transparent={true} visible={showModal} animationType="none">
      <View style={styles.overlay}>
        <View style={styles.modalBackground}>
          <View style={styles.centerview}>
            <View style={styles.modalview}>
              <Image source={require('../../Assets/image/alert.png')} style={styles.imagsp} />
              <Text style={styles.font}>Are you sure you want to exit</Text>
              <Text style={styles.font}>Aadhar verification?</Text>
              <Text style={{ fontFamily: 'Open Sans', color: "#7E7E7E", top: 10 }}>If you exit, you will have to start your</Text>
              <Text style={{ fontFamily: 'Open Sans', color: "#7E7E7E", top: 10, marginBottom: 40 }}>Aadhaar verification process again</Text>
              <View style={{ flexDirection: 'row', gap: 30 }}>
                <TouchableOpacity onPress={handleYesPress}>
                  <View style={styles.button1}>
                    <Text style={styles.buttonText}>Yes</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShowModal(false)}>
                  <View style={styles.button2}>
                    <Text style={styles.buttonText}>Close</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagsp: {
    height: 75,
    width: 83,
    top: -20,
    paddingBottom: 1,
    marginTop: 40
  },
  font: {
    color: 'black',
    fontFamily: 'Helvetica Neu',
    fontWeight: '600',
    fontSize: 24,
  },
  modalview: {
    height: "80%",
    width: "100%",
    marginBottom: 20,
    backgroundColor: '#FFFFE4',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 290,
    marginBottom: -80,
  },
  button1: {
    height: 40,
    backgroundColor: "#D05F33",
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button2: {
    height: 40,
    backgroundColor: "#7E7E7E",
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 17,
    color: "#FFFFE4",
    fontWeight: "600"
  }
});

export default FallbackBottom;
