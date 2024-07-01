import React from "react";
import { StyleSheet, Text, View,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from "../Screens/EmailVerificationScreen/styles";

const Button = (props:ButtonProps)=>{
    return (
        <View>
        <TouchableOpacity onPress={props.onClick} style={styles.button}>

        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> 
        </View>       
    );
}

type ButtonProps={
  onClick?:()=>void;
  text?:string;
}
export default  Button;
