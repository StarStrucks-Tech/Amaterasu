import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUserList} from '../../../Hooks/commonStore/action';
import {reducer} from '../../../Hooks/commonStore/reducer';

const UserList = () => {
  const dispatch = useDispatch();
  const userList: any[] = useSelector((state: any) => state.reducer);
  console.log('*********************users in UserList: ', userList);
  const users = userList[0]['users'];
  // console.log('*********************users in UserList: ', users);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {users.length
        ? users.map((user: any) => (
            <View key={user.id}>
              <Text style={{fontSize: 18}}>
                {user.firstName} {user.lastName} {user.age}
              </Text>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserList;
