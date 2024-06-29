import React from 'react';
import { View, StyleSheet, Text, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';

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
    marginLeft:-1,
    bottom:-102,
    width: 380,
    height: 380,
    alignSelf:'center',
  },
  title: {
    bottom:-24,
    fontSize: 42,
    alignSelf: 'center', 
    fontFamily: 'serif',
    color: '#3b4e48', 
    letterSpacing: 8,
  },
  button: {
    borderRadius:20,
    top:74,
    borderRadius:120,
    backgroundColor: '#000', 
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignSelf:'center',
  },
  buttonText: {
    color: '#e9e9d4', 
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  footerText: {
    marginTop: 50,
    bottom: -250,
    fontSize: 18,
    textAlign: 'center',
    fontWeight:'bold', 
    color: '#7a897f', 
  },
});

export default StaticScreen;
