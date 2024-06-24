import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

const LivelinessScreen = () => {
    const [isRecording, setIsRecording] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.cameraView}>
                <RNCamera
                    style={styles.camera}
                    type={RNCamera.Constants.Type.front}
                />
            </View>
            <View style={styles.overlay}>
                <View>
                    {isRecording ? 
                    <View style={styles.align} >
                        <Image source={require('./assets/recording.png')} style={styles.dot} />
                        <Text style={styles.text}>Recording in Progress</Text>
                    </View>
                    : <View style={styles.align} >
                        <Image source={require('./assets/recording.png')} style={styles.dot} />
                        <Text style={styles.text}>Recording</Text>
                    </View>
                    }
                </View>
                <Text style={styles.text}>Speak each digit out loud, one by one</Text>
                <Text style={styles.code}>X X X X</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setIsRecording(!isRecording)}
                >
                    <Text style={styles.buttonText}>
                        {isRecording ? 'Stop Recording' : 'Complete Verification'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default LivelinessScreen;