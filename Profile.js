import React, {useState} from 'react';
import { Touchable, TouchableOpacity, View,TextInput,Text ,StyleSheet, Image} from 'react-native';

const Profile = () => {
    const profileImage = 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';
return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      </View>
      <View style={styles.right}>
        <View>
          <Text style={styles.name}>name</Text>
          <Text style={styles.description}>description1</Text>
          <Text style={styles.description}>description2</Text>
        </View>
        </View>
        <View style={styles.left}>
        <Image source={{ uri: profileImage }} style={styles.additionalImage} />
      </View>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
      },
      left: {
        marginRight: 20,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      right: {
        flex: 1,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description: {
        fontSize: 16,
        marginBottom: 5,
      },
      additionalImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
      },
  });
  

export default Profile;

  
