import React, { useEffect, useState } from 'react';
import{
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';

const Styles=StyleSheet.create({
  container: {
    flex:1
  }
})

const Header = () => {
  const cartData=useSelector((state)=>state.reducer);
  const [cartItems,setCartItems]=useState(0)
  useEffect(()=>{
    setCartItems(cartData.length)
  }, [cartItems])
  return (
    <View style ={Styles.container}>
      <Text style={{
         fontsize:30, textAlign:'right',padding:10,backgroundColor:'red'
         }}> 
      {cartItems}
    </Text>
    </View>

  );
};

export default Header;