// Import necessary components and functions from React Native
import {
  View,
  TouchableOpacity,
  Button,
  Modal,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

//Import necessary functions from 'APICall' file
import {
  getPublicAPI,
  getPrivateAPI,
  postPrivateAPI,
  postPublicAPI,
  putPrivateAPI,
  putPublicAPI,
  patchPrivateAPI,
  patchPublicAPI,
  deletePrivateAPI,
  deletePublicAPI,
} from './APICall';

/**
 * TestAPI component that demonstrates how to call public and private APIs.
 * This component renders buttons to call different API methods and displays results.
 */
export default function TestAPI() {
  //Replace 'your_oauth_token' with actual OAuth token
  const oauthToken = 'your_oauth_token';
  //Replace 'albums/1' with actual endpoint
  const endpoint = 'albums/1';

  //Sample user data
  const userData = {
    userId: 1,
    id: 1,
    title: 'rehenderit',
  };

  //State variable to manage modal visibility for public API Call
  const [modalVisible1, setModalVisible1] = useState(false);

  //State variable to manage modal visibility for private API Call
  const [modalVisible2, setModalVisible2] = useState(false);

  /**
   * Handler for public button press. Sets modal visibility for public API methods to true.
   */
  const handlePublicButton = () => {
    setModalVisible1(true);
  };

  /**
   * Handler for private button press. Sets modal visibility for private API methods to true.
   */
  const handlePrivateButton = () => {
    setModalVisible2(true);
  };

  /**
   * GET public API data
   */
  const getPublicData = async () => {
    const data = await getPublicAPI(endpoint);
    console.log(data);
    setModalVisible1(false);
  };

  /**
   * GET private API data
   */
  const getPrivateData = async () => {
    const data = await getPrivateAPI(endpoint, oauthToken);
    console.log(data);
    setModalVisible2(false);
  };

  /**
   * POST public API data
   */
  const postPublicData = async () => {
    const publicResponse = await postPublicAPI(endpoint, userData);
    console.log(publicResponse);
    setModalVisible1(false);
  };

  /**
   * POST private API data
   */
  const postPrivateData = async () => {
    const privateResponse = await postPrivateAPI(
      endpoint,
      oauthToken,
      userData,
    );
    console.log(privateResponse);
    setModalVisible2(false);
  };

  /**
   * PUT public API data
   */
  const putPublicData = async () => {
    const publicData = await putPublicAPI(endpoint, userData);
    console.log(publicData);
    setModalVisible1(false);
  };

  /**
   * PUT private API data
   */
  const putPrivateData = async () => {
    const privateData = await putPrivateAPI(endpoint, oauthToken, userData);
    console.log(privateData);
    setModalVisible2(false);
  };

  /**
   * PATCH public API data
   */
  const patchPublicData = async () => {
    const data = await patchPublicAPI(endpoint, userData);
    console.log(data);
    setModalVisible1(false);
  };

  /**
   *PATCH private API data
   */
  const patchPrivateData = async () => {
    const data = await patchPrivateAPI(endpoint, oauthToken, userData);
    console.log(data);
    setModalVisible2(false);
  };

  /**
   * DELETE public API data
   */
  const deletePublicData = async () => {
    const data = await deletePublicAPI(endpoint);
    console.log(data);
    setModalVisible1(false);
  };

  /**
   * DELETE private API data
   */
  const deletePrivateData = async () => {
    const data = await deletePrivateAPI(endpoint, oauthToken);
    console.log(data);
    setModalVisible2(false);
  };

  // Render UI elements
  return (
    <View style={styles.container}>
      {/* Button to call public API */}
      <TouchableOpacity style={styles.button} onPress={handlePublicButton}>
        <Text style={styles.buttonText}>Call public API</Text>
      </TouchableOpacity>

      {/* Button to call private API */}
      <TouchableOpacity style={styles.button} onPress={handlePrivateButton}>
        <Text style={styles.buttonText}>Call private API</Text>
      </TouchableOpacity>

      {/* Modal for public API methods */}
      <Modal visible={modalVisible1} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Public API methods</Text>
          {/* Button to call GET public API data */}
          <TouchableOpacity style={styles.modalButton} onPress={getPublicData}>
            <Text style={styles.modalButtonText}>GET public API data</Text>
          </TouchableOpacity>
          {/* Button to call POST public API data */}
          <TouchableOpacity style={styles.modalButton} onPress={postPublicData}>
            <Text style={styles.modalButtonText}>POST public API data</Text>
          </TouchableOpacity>
          {/* Button to call PUT public API data */}
          <TouchableOpacity style={styles.modalButton} onPress={putPublicData}>
            <Text style={styles.modalButtonText}>PUT public API data</Text>
          </TouchableOpacity>
          {/* Button to call PATCH public API data */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={patchPublicData}>
            <Text style={styles.modalButtonText}>PATCH public API data</Text>
          </TouchableOpacity>
          {/* Button to call DELETE public API data */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={deletePublicData}>
            <Text style={styles.modalButtonText}>DELETE public API data</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Modal for public API methods */}
      <Modal visible={modalVisible2} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Private API methods</Text>
          {/* Button to call GET private API data */}
          <TouchableOpacity style={styles.modalButton} onPress={getPrivateData}>
            <Text style={styles.modalButtonText}>DELETE public API data</Text>
          </TouchableOpacity>
          {/* Button to call POST private API data */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={postPrivateData}>
            <Text style={styles.modalButtonText}>POST private API data</Text>
          </TouchableOpacity>
          {/* Button to call PUT private API data */}
          <TouchableOpacity style={styles.modalButton} onPress={putPrivateData}>
            <Text style={styles.modalButtonText}>PUT private API data</Text>
          </TouchableOpacity>
          {/* Button to call PATCH private API data */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={patchPrivateData}>
            <Text style={styles.modalButtonText}>PATCH private API data</Text>
          </TouchableOpacity>
          {/* Button to call DELETE private API data */}
          <TouchableOpacity
            style={styles.modalButton}
            onPress={deletePrivateData}>
            <Text style={styles.modalButtonText}>DELETE private API data</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

// Define styles for UI elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
