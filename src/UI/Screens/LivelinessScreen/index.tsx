import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Camera} from 'expo-camera';
import styles from './Styles';
import {CameraType} from 'expo-camera/build/legacy/Camera.types';

const LivelinessScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const cameraRef = Camera(null);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  const handleRecording = async () => {
    if (isRecording) {
      cameraRef.current?.stopRecording();
    } else {
      if (cameraRef.current) {
        const video = await cameraRef.current.recordAsync();
        console.log('Video recorded: ', video);
      }
    }
    setIsRecording(!isRecording);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <Camera
          style={styles.camera}
          type={CameraType.front}
          ref={cameraRef}
          onCameraReady={handleCameraReady}
        />
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
          onPress={handleRecording}
          disabled={!cameraReady}>
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Complete Verification'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LivelinessScreen;
