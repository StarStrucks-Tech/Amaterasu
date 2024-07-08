import React,{useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const EmploymentDetailsScreen = () => {

  const [name,SetName] = useState('');
 return(

  <View>
<TextInput 
placeholder='Employment Type'
onChangeText = {(text) => SetName(text)}
value={name}
/>


  </View>
 );

};

export default EmploymentDetailsScreen;