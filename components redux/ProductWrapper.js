import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from './Header';
import Product from './Product';

const ProductWrapper = ({navigation}) => {
  const products=[
    {
      name:'Nokia Mobile',
      color:'Blue',
      Price: 22000,
      image:'C:\Users\anand\Downloads\smartphone.png'
    },
    {
      name:'Samsung Mobile',
      color:'red',
      Price: 22000,
      image:'C:\Users\anand\Downloads\smartphone.png'
    },
    {
      name:'Realme Mobile',
      color:'Black',
      Price: 22000,
      image:'C:\Users\anand\Downloads\smartphone.png'
    }
  ]
  return (
    <View style ={Styles.container}>
        <Button title='Go to User List' onPress={()=>navigation.navigate("User")}/>
      <Header />
      <ScrollView>
      {
        products.map((item)=><Product item={item}/>)
}
          </ScrollView>

      
      <Product />



    </View>
  );
};

const Styles=StyleSheet.create({
  container: {
    flex:1
  }
})
export default ProductWrapper;
