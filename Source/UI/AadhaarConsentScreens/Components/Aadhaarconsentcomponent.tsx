import React from "react";
import {View, Text, Image, PixelRatio} from 'react-native';
import adharconsentstyles from "../Styles/adhaarconsentstyle";
import TextComponent from "../../Components/Textcomponents";
const Aadhaarcomponent=()=>{
    return(
    <View>
        <View>
        <Text style={adharconsentstyles.title}>{TextComponent.Aadhartitle}
        </Text></View>
        <View>
        <Text style={adharconsentstyles.subhead}>{TextComponent.Aadhaarsubhead}
    </Text>
      </View>
    <Image source={require('../../../Assets/image/ss.png')} style={
         {height:PixelRatio.getPixelSizeForLayoutSize(3.16),
         width:PixelRatio.getPixelSizeForLayoutSize(21.5),
         marginTop:PixelRatio.getPixelSizeForLayoutSize(5),alignSelf:'center'}} />
    <View style={{marginTop:PixelRatio.getPixelSizeForLayoutSize(5), marginBottom: PixelRatio.getPixelSizeForLayoutSize(5)}}>
    <Text style={adharconsentstyles.subhead1}>{TextComponent.Aadhaarsubhead1}</Text>
    </View>
    </View>
)
};
export default Aadhaarcomponent;