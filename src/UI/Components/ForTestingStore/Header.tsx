/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux'
import { useState, useEffect } from 'react';

const Header = () => {

  const cartData = useSelector((state)=>state.reducer)
  const [cartItems,setCartItems]=useState(0)
 
  useEffect(()=>{
setCartItems(cartData.length)
  },[cartData])

  return (
    <View style = {styles.container}>
      <Text style={{fontSize: 30}}>{cartItems}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
