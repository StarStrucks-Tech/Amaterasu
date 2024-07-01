import React from "react";
import { B, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from "../Screens/EmailVerificationScreen/styles";

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