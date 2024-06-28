import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserList } from '../../../Hooks/ReducerHub/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state: any) => state.reducer?.[0]?.users || []);

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.warn('in component', userList);

  return (
    <View style={styles.container}>
      <Text>Users List</Text>
      {userList.length > 0 ? (
        userList.map((item: any) => (
          <View>
            <Text style={{ fontSize: 18 }}>{item.firstName}</Text>
          </View>
        ))
      ) : (
        <Text>No users found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
