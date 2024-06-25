/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserList } from '../../../Hooks/commonStore/action';

const UserList = () => {
   const dispatch = useDispatch();
   const userList = useSelector((state:any)=>state.reducer)

   useEffect(()=>{
    dispatch(getUserList());
   },[dispatch]);
  console.warn('in component',userList)

  return (
    <View style = {styles.container}>
      {
  userList.length ? (
    userList.map((item: any) => (
      <View key={item.id}>
        <Text style={{ fontSize: 18 }}>{item.firstName}</Text>
      </View>
    ))
  ) : null
}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
