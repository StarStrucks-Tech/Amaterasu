import React, { useState, useRef } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

const LivelinessScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<RNCamera>(null);
  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        const promise = cameraRef.current.recordAsync();

        if (promise) {
          setIsRecording(true);
          const data = await promise;
          console.log('Recording complete: ', data);
          
        }
      } catch (error) {
        console.error('Failed to start recording: ', error);
      }
    }
  };

  const stopRecording = () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    }
  };

  const handleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraView}>
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.front}
          captureAudio={true} 
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
        <TouchableOpacity style={styles.button} onPress={handleRecording}>
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Complete Verification'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LivelinessScreen;
