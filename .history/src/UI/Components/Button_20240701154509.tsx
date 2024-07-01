import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from "../Screens/EmailVerificationScreen/styles";
import { Button as <RNButton></RNButton> } from "react-native";

const Button = ()=>{
    return (
        <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> 
        </View>       
    );
}
export default  Button;