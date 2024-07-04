import React from "react";
import {View, Text, Image, PixelRatio} from 'react-native';
import adharconsentstyles from "./style";
import { TextComponentConstant } from "../../Screens/AadhaarConsentScreens/Constant";

type AadhaarConsentProps = {
  imageSource: number;
  texttitle: string;
  textsubhead: string;
  textsubhead1: string;
}
const Aadhaarcomponent=(props: AadhaarConsentProps)=>{
    return(
    <View>
        <View>
        <Text style={adharconsentstyles.title}>{props.texttitle}
        </Text></View>
        <View>
        <Text style={adharconsentstyles.subhead}>{props.textsubhead}
    </Text>
      </View>
    <Image source={props.imageSource} style={
         {height:PixelRatio.getPixelSizeForLayoutSize(3.16),
         width:PixelRatio.getPixelSizeForLayoutSize(21.5),
         marginTop:PixelRatio.getPixelSizeForLayoutSize(5),alignSelf:'center'}} />
    <View style={{marginTop:PixelRatio.getPixelSizeForLayoutSize(5), marginBottom: PixelRatio.getPixelSizeForLayoutSize(5)}}>
    <Text style={adharconsentstyles.subhead1}>{props.textsubhead1}</Text>
    </View>
    </View>
)
};
export default Aadhaarcomponent;