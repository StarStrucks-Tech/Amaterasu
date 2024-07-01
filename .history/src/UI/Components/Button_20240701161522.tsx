import React from "react";
import { StyleSheet, Text, View, } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from "../Screens/EmailVerificationScreen/styles";
import { Button } from "react-native";

const Buttons = ()=>{
    return (
        <View>
             <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> 
        </View>       
    );
}
export default  Buttons;