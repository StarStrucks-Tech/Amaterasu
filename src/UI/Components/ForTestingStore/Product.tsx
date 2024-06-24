/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../../../Hooks/commonStore/action';
import { useState } from 'react';


const Product = (props:any) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.reducer);
  const[isAdded,setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
  dispatch(addToCart(item))
  }

const handleRemoveFromCart = (item) => {
  dispatch(removeFromCart(item.name));
}

useEffect(() => {
  const itemInCart = cartItems.some((cartItem) => cartItem.name === item.name);
  setIsAdded(itemInCart);
 
}, [cartItems, item.name]);


  return (
    <View>
       <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text>{item.color}</Text>
      <Text>{item.price}</Text>
      {
        isAdded ?
        <Button title="Remove from Cart" onPress={()=>handleRemoveFromCart(item)} />
        :
        <Button title="Add to Cart" onPress={()=>handleAddToCart(item)} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
