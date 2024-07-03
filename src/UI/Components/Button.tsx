import React from "react";
import { StyleSheet, Text, View,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from "../Screens/EmailVerificationScreen/styles";

/**
 * Button component
 * @param {ButtonProps} props - The props for the Button component
 */
const Button = (props:ButtonProps)=>{  
    return (
        <View>
        <TouchableOpacity onPress={props.onClick} style={styles.button}>

        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity> 
        </View>       
    );
}

/**
 * Type definition for ButtonProps
 * @type {Object}
 * @property {() => void} [onClick] - Optional click handler function
 * @property {string} [text] - Optional button text
 */
type ButtonProps={    
  onClick?:()=>void;
  text?:string;
}
export default  Button;
