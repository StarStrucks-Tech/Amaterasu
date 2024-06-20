// NewScreen.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const SecureComp = () => {
  return (
    <View style={{
      marginTop:10,
      height: 50,
      width:400,
      flexDirection: "row",
      backgroundColor: "#E0E0E0",
      alignItems: "center"
    }
    }>
      <Image source={require('../../Assets/image/Lock.png')}
       style={ 
        {
          marginRight: 10,
          marginLeft:80,
          height:20,
          width:15
        } 
      }/>
      <Text style={{fontFamily: 'Open Sans', color:"#7E7E7E"}}>Your Aadhaar details are protected</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecureComp;
