import { StyleSheet } from "react-native";
import Colors from "../../../Configs/color";

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'OffWhite',
        // padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
    
    title: {
      textAlign: 'center',
      fontFamily: 'Helvetica Neue',
      color: '#000000',
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
      color: '#000000',
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
      backgroundColor:'#FFFFE4',
      
    },
    icon: {
      width: 250,
      height:200,
    //   paddingHorizontal:180,
    //   paddingVertical:0,
    //   resizeMode: 'contain',
      top: 35,
      left:10,
    },
    input: {
      width: 300,
      height: 40,
      flex: 2,
      fontFamily:'Open Sans',
      color: '#421C25',
      fontWeight:'500',
      justifyContent: 'center',
      alignItems: 'center',
      padding:2,
      borderBottomColor:'#E0E0E0',
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
      color: '#7E7E7E',
      marginLeft: 15,
      marginRight: 10,
      marginBottom: 50,
      top:-35,
    },
   button: {
      backgroundColor:'#D05F33',
      width: 150,
      height:31,
      alignItems: 'center',
      borderRadius: 5,
      marginVertical:10,
      marginTop: 20,
      marginBottom: 17,
      top:3,
      
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