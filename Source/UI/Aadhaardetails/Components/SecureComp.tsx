// NewScreen.js
import React from 'react';
import { View, Text, StyleSheet,Image,PixelRatio } from 'react-native';
import TextComponent from '../../Components/Textcomponents';
import Colors from '../../Components/Colors';

const SecureComp = () => {
  return (
    <View style={{
      marginTop: PixelRatio.getPixelSizeForLayoutSize(4),
      marginBottom: PixelRatio.getPixelSizeForLayoutSize(4),
      height: PixelRatio.getPixelSizeForLayoutSize(17) ,
      width: PixelRatio.getPixelSizeForLayoutSize(120),
      flexDirection: "row",
      backgroundColor: Colors.secureComponentcolor,
      alignItems: "center"
    }
    }>
      <Image source={require('../../../Assets/image/Lock.png')}
       style={ 
        {
          marginRight: PixelRatio.getPixelSizeForLayoutSize(4) ,
          marginLeft: PixelRatio.getPixelSizeForLayoutSize(26),
          height: PixelRatio.getPixelSizeForLayoutSize(7),
          width: PixelRatio.getPixelSizeForLayoutSize(5),
        } 
      }/>
      <Text style={{fontFamily: 'Open Sans', color:Colors.subhead1}}>{TextComponent.SecureComponentText}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecureComp;
