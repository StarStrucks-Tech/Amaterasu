import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import Header from './Header';
import Product from './Product';

const ProductWrapper = ({navigation}) => {
  const products = [
    {
      id: '1',
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
    },
    {
      id: '2',
      name: 'Apple I Phone',
      color: 'black',
      price: 130000,
    },
    {
      id: '3',
      name: 'Nokia',
      color: 'green',
      price: 30000,
    },
  ];
  return (
    <View style={styles.container}>
      <Button
        title="Go to user list"
        onPress={() => navigation.navigate('User')}
      />
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductWrapper;
