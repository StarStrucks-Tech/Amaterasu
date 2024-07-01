import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';

const Header = () => {
  const cartData = useSelector((state: any) => state.reducer);
  const cartItems = cartData.length;

  return (
    <View style={styles.container}>
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
