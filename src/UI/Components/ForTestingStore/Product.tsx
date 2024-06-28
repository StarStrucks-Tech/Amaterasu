import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../Hooks/ReducerHub/action';
import { useState } from 'react';

const Product = (props: any) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const itemInCart = cartItems.some(
        (cartItem: any) => cartItem.name === item.name,
      );
      setIsAdded(itemInCart);
    } else {
      setIsAdded(false); // Assuming no items mean the item is not in cart
    }
  }, [cartItems, item]);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>{item.name}</Text>
      <Text>{item.color}</Text>
      <Text>{item.price}</Text>
      {isAdded ? (
        <Button
          title="Remove from Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
