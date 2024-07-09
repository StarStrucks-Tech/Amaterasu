import { StyleSheet, Dimensions } from "react-native";
import constants from "../../../../UI-Constants/Constant.json";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
    } ,
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    } ,
    image: {
      marginTop: height * 0.1,
      width: width * 0.44,
      height: height * 0.44,
    } ,
  });

  export default styles;