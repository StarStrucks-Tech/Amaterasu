import React from 'react';
import { View, Text, PixelRatio } from 'react-native';
import adhaarOtpstyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { TextComponentConstant } from '../../Screens/AadhaarConsentScreens/Constant';
const AadhaarOtpTextComponent = () => {
  
  return (
    <View>
        <Text style={adhaarOtpstyles.title}>{TextComponentConstant.AadhaarotpTitle}</Text>
      <Text style={[adhaarOtpstyles.subhead, { alignContent: 'center', textAlign: 'center', margin:  PixelRatio.getPixelSizeForLayoutSize(4)}]} 
      >{TextComponentConstant.Aadhaarotpsubtitles}
     </Text>
    </View>
  );
};

export default AadhaarOtpTextComponent;
