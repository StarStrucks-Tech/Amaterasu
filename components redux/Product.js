import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './action';

const Product = (props) => {
  const item = props.item
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name))


  }
  useEffect(() => {
    let result = cartItems.filter((element) => {
      return element.name === item.name
    });
    if (result.length) {
      setIsAdded(true)
    } else {
      setIsAdded(false)
    }

  }, [cartItems])

  return (
    <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10 }}>
      <Text style={{ fontSize: 24 }} >{item.name}</Text>
      <Text style={{ fontSize: 24 }} >{item.Price}</Text>
      <Text style={{ fontSize: 24 }} >{item.color}</Text>
      <Image style={{ width: 200, height: 100 }} source={{ uri: item.image }} />
  
      {
        isAdded ?
          <Button title='Remove To Cart' onPress={() => handleAddToCart(item)} />
          :
          <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
      }
  
  
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Product; 