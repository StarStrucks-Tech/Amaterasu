import { StyleSheet,PixelRatio } from "react-native";
const styles = StyleSheet.create({
  otpContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(11),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  inbox: {
    borderBottomColor: '#7E7E7E',
    borderBottomWidth:PixelRatio.getPixelSizeForLayoutSize(0.8),
    width:PixelRatio.getPixelSizeForLayoutSize(12), 
    height: PixelRatio.getPixelSizeForLayoutSize(13), 
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(1.5), 
    color: 'black',
    textAlign: 'center',
  },
});

export default styles;

