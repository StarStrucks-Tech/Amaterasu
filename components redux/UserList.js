import React, { useEffect } from 'react';
import{
  View,
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';

import{getUserList} from './redux/action';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const UserList = () => {
    const dispatch=useDispatch();
    const userList=useSelector((state)=>state.reducer)

    useEffect(()=> {
        dispatch(getUserList())
    }, [])
    console.warn("in component", userList);
 
  return (
    <View Styles ={Styles.container}>
        
        <Text> 
            User List Screen
        </Text>
        </View>
     
  );
};

const Styles=StyleSheet.create({
  container: {
    flex:1
  }
})
export default UserList;


