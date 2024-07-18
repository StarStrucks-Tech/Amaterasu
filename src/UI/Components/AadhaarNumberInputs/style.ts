import { StyleSheet, PixelRatio } from "react-native";

const AdhaarInputstyle = StyleSheet.create({
    inbox: {
        textAlign:'center',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth:  PixelRatio.getPixelSizeForLayoutSize(1),
        paddingHorizontal:  PixelRatio.getPixelSizeForLayoutSize(25),
        paddingVertical: 0,
        width: '90%',
        color: 'black',
      },
  });
  
  export default AdhaarInputstyle;