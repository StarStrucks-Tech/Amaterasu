import React from 'react';
import { View, Text, PixelRatio } from 'react-native';
import adhaarOtpstyles from '../Styles/adhaarOtpScren';
import { useNavigation } from '@react-navigation/native';
import TextComponent from '../../Components/Textcomponents';
const OTPTextComponent = () => {
  
  return (
    <View>
        <Text style={adhaarOtpstyles.title}>{TextComponent.AadhaarotpTitle}</Text>
      <Text style={[adhaarOtpstyles.subhead, { alignContent: 'center', textAlign: 'center', margin:  PixelRatio.getPixelSizeForLayoutSize(4)}]} 
      >{TextComponent.Aadhaarotpsubtitles}
     </Text>
    </View>
  );
};

export default OTPTextComponent;
