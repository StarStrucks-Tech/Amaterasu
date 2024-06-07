import React from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from './components redux/Header';
import Product from './components redux/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './ProductWrapper';
import UserList from './UserList';
const stack=createNativeStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer style ={style.container}>
      <stack.Navigator>
        <Stack.Screen name='Home' Component={ProductWrapper} />
        <Stack.Screen name='User' Component={UserList} />
      </stack.Navigator>
      
     



    </NavigationContainer>
  );
};

const style=StyleSheet.create({
  container: {
    flex:1
  }
})
export default App;
