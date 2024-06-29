import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera, useCameraDevices, CameraPermissionStatus } from 'react-native-vision-camera';
import styles from './styles';

const LivelinessScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const devices = useCameraDevices();
  const device = devices.front;

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();

      setHasPermission(
        cameraPermission === 'authorized' &&
        microphonePermission === 'authorized'
      );
    };

    getPermissions();
  }, []);

  if (device == null || !hasPermission) return <View style={styles.container} />;

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <Camera style={styles.camera} device={device} isActive={true} />
      </View>
      <View style={styles.overlay}>
        <View>
          {isRecording ? (
            <View style={styles.align}>
              <Image
                source={require('./assets/recording.png')}
                style={styles.dot}
              />
              <Text style={styles.text}>Recording in Progress</Text>
            </View>
          ) : (
            <View style={styles.align}>
              <Image
                source={require('./assets/recording.png')}
                style={styles.dot}
              />
              <Text style={styles.text}>Recording</Text>
            </View>
          )}
        </View>
        <Text style={styles.text}>Speak each digit out loud, one by one</Text>
        <Text style={styles.code}>X X X X</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setIsRecording(!isRecording)}>
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Complete Verification'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LivelinessScreen;
