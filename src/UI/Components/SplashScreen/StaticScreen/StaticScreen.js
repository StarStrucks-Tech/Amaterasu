import React from 'react';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const StaticScreen = () => {
  return (
    <View>
        <Image
          source={require('./assets/screenlight.png')}
          style={styles.image}
        />
        <Text style={styles.title}>KUBAIR</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>Your money is safe with us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: height*-0.25,
    width: width*0.44,
    height: height*0.44,
    alignSelf:'center',
  },
  title: {
    marginTop:height*-0.1,
    fontSize: 42,
    alignSelf: 'center', 
    fontFamily: 'serif',
    color: '#3b4e48', 
    letterSpacing: 8,
  },
  button: {
    borderRadius:20,
    top:height*0.05,
    borderRadius:120,
    backgroundColor: '#000', 
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignSelf:'center',
  },
  buttonText: {
    color: '#e9e9d4', 
    fontWeight: 'bold',
    textAlign: 'center', 
    alignSelf: 'center',
    width:width*0.23,
    height:height*0.029,
    fontSize:18,
  },
  footerText: {
    bottom: height*-0.294,
    fontSize: 18,
    textAlign: 'center',
    fontWeight:'bold', 
    color: '#7a897f', 
  },
});


export default StaticScreen;