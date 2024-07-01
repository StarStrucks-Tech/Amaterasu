import { StyleSheet } from "react-native";
import { Colors } from "../../../Assets/Colors";

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.OFF_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
    
    title: {
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
      color: Colors.BLACK,
      fontSize: 27,
      lineHeight: 30,
      alignItems:'center',
      fontWeight: '600',
      marginBottom: 10,
      bottom:-65,
      top: 60,
    },
    subtitle: {
      fontFamily: 'Open Sans',
      color: Colors.BLACK,
      fontWeight: '400',
      lineHeight: 25,
      fontSize: 17,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 90,
    },
  
    iconContainer: {
      marginBottom: 20,
      alignItems: 'center',
      backgroundColor:Colors.OFF_WHITE,
      
    },
    icon: {
      width: 250,
      height:200,
      top: 35,
      left:10,
    },
    input: {
      width: 300,
      height: 40,
      flex: 2,
      fontFamily:'Open Sans',
      color: Colors.OFF_BLACK,
      fontWeight:'500',
      justifyContent: 'center',
      alignItems: 'center',
      padding:2,
      borderBottomColor:Colors.CLOUDY_GRAY,
      borderBottomWidth:2,
      borderBottomLeftRadius:1,
      borderBottomRightRadius:5,
      marginBottom: 5,
      marginTop: 35,
      fontSize: 17,
      top:-10,
    },
    charCount: {
      alignSelf: 'flex-end',
      color: Colors.FOG_GRAY,
      marginLeft: 15,
      marginRight: 10,
      marginBottom: 50,
      top:-35,
    },
   button: {
      backgroundColor:Colors.STRONG_ORANGE,
      width: 150,
      height:31,
      alignItems: 'center',
      borderRadius: 5,
      marginVertical:10,
      marginTop: 18,
      marginBottom: 20,
      
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color:'white',
      marginBottom: 10,
      top:3.2
    }
  
  });

  export default styles;