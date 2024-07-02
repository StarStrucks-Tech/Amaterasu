
import { View, Text } from 'react-native'
import React from 'react'
import Splash from '../Components/Splash'
import { SplashTextComponent } from '../Styles/Textcomponents'
const Screen1 = () => {
  return (
    <View style={{alignItems:'center'}}>
      <Splash
      imageSource={require('../Styles/assests/ss2.png')}
      text={SplashTextComponent.SPLASH_TEXT}/>
    </View>
  )
}

export default Screen1