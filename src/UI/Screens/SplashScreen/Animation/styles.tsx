import { StyleSheet, Dimensions } from "react-native";
import constants from "../../../../UI-Constants/Constant.json";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: constants.Styles.CONTAINER_FLEX,
    } ,
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    } ,
    image: {
      marginTop: height * constants.Styles.IMAGE_MARGIN_TOP,
      width: width * constants.Styles.IMAGE_WIDTH,
      height: height * constants.Styles.IMAGE_HEIGHT,
    } ,
  });

  export default styles;