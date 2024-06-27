import { StyleSheet,PixelRatio } from "react-native";
import Colors from "../../Components/Colors";
const adhaarOtpstyles = StyleSheet.create({
    marginstyle: {
      marginTop: PixelRatio.getPixelSizeForLayoutSize(3) 
    },
    container: {
      width:"100%",
      backgroundColor: '#FFFFE4',
      padding: PixelRatio.getPixelSizeForLayoutSize(6) ,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    title: {
      fontSize: PixelRatio.getPixelSizeForLayoutSize(9) ,
      textAlign:'center',
      fontFamily: 'Helvetica Neue',
      color: Colors.textcolor,
      lineHeight: PixelRatio.getPixelSizeForLayoutSize(11) ,
      alignItems: "center",
      fontWeight: '600',
    },
    imagsp: {
      height: PixelRatio.getPixelSizeForLayoutSize(60) ,
      width: PixelRatio.getPixelSizeForLayoutSize(65) ,
      paddingTop: PixelRatio.getPixelSizeForLayoutSize(6) ,
      marginTop: PixelRatio.getPixelSizeForLayoutSize(20) ,
      marginBottom: PixelRatio.getPixelSizeForLayoutSize(14) 
    },
    subhead: {
      fontFamily: 'Open Sans',
      fontWeight: '600',
      fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5) ,
      color: Colors.seconarycolor,
      alignItems: 'center',
      textAlign: "center",
      lineHeight: PixelRatio.getPixelSizeForLayoutSize(6) 
    },
  });
  
  export default adhaarOtpstyles;
  