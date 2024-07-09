import {StyleSheet, Dimensions, TextStyle} from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
    } ,
    image: {
      marginTop: height * 0.1,
      width: width * 0.44,
      height: height * 0.44,
      alignSelf: 'center',
    } ,
    title: {
      marginTop: height * -0.1,
      fontSize: 42,
      alignSelf: 'center',
      fontFamily: "serif",
      color: "#3b4e48",
      letterSpacing: 8,
    } ,
    button: {
      borderRadius: 120,
      top: height * 0.05,
      backgroundColor: "#000",
      paddingVertical: 10,
      paddingHorizontal: 50,
      alignSelf: 'center',
    } ,
    buttonText: {
      color: "#e9e9d4",
      fontWeight: "bold",
      textAlign: "center",
      alignSelf: 'center',
      width: width * 0.23,
      height: height * 0.029,
      fontSize: 18,
    } as TextStyle,
    footerText: {
      bottom: height * -0.353,
      fontSize: 18,
      textAlign: "center",
      fontWeight: "bold",
      color: "#7a897f",
    } as TextStyle,
  });
  
  export default styles;
