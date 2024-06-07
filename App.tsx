/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View ,ScrollView,Image, StyleSheet, Text} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Product from './components redux/Product';


  



const Another = () => {
  const item = {
    name: 'Nokia Mobile',
    Price: 20000,
    color: 'Red',
    image: 'https://image.shutterstock.com/image-vector/smartphone-iconvector-illustration-260nw-211546936.jpg'
    
   
    
  
  };
 




  return (
    <View style={StyleS.container}>
      <Header/>
      <ScrollView>
      <Product item={item}/>
      </ScrollView>
    </View>
  );
};
const StyleS=StyleSheet.create({
  container:{
    flex:1,
  },
});

export default Another;
