import { StyleSheet,PixelRatio } from "react-native";
import Colors from "../../Components/Colors";
const adharconsentstyles =StyleSheet.create({
    container: {
      backgroundColor: Colors.bgcolor,
      padding:PixelRatio.getPixelSizeForLayoutSize(5.4),
      justifyContent: 'center',
      alignItems: 'center',
      height:"100%"
    },  container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inbox: {
      borderBottomColor: '#E0E0E0',
      borderBottomWidth:PixelRatio.getPixelSizeForLayoutSize(1),
      paddingHorizontal:PixelRatio.getPixelSizeForLayoutSize(4),
      paddingVertical:0,
      width:'90%',
      marginTop: PixelRatio.getPixelSizeForLayoutSize(6.3),
      color:'black'
      
    },
    register: {
      backgroundColor: '#D05F33',
      width: 140,
      height:31,
      alignItems: 'center',
      borderRadius: 5,
      // marginVertical:10
      gap:10,
      marginTop: 30,
      marginBottom: 20,
      top:120
      
      
    },
    regtitle: {
      fontSize: 16,
      fontWeight: '600',
      color:'white',
      marginBottom: 10,
      top:3.2
    },
   title: {alignContent: "center",textAlign:"center",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
      fontSize: PixelRatio.getPixelSizeForLayoutSize(7.5) ,
      fontFamily: 'Helvetica Neu',
      color: 'black',
      lineHeight:PixelRatio.getPixelSizeForLayoutSize(11),
      justifyContent: "center",
      alignItems:"center",
      fontWeight: '400',
    },
    imagsp: {
      marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
      height: PixelRatio.getPixelSizeForLayoutSize(80),
      width: PixelRatio.getPixelSizeForLayoutSize(80),
  
    },subhead1: {
      alignContent: "center",
      textAlign:"center",
      fontWeight: '800',
      fontSize:PixelRatio.getPixelSizeForLayoutSize(4.3),
      justifyContent: "center",
      alignItems: 'center',
      lineHeight:PixelRatio.getPixelSizeForLayoutSize(6),
      color: Colors.subhead1,
      fontFamily: 'OpenSans',
    },
    subhead: {alignContent: "center", textAlign:"center",
      fontFamily: 'Open Sans',
      fontWeight: '100',
      fontSize: PixelRatio.getPixelSizeForLayoutSize(4.33),
      color:Colors.subhead,
      marginTop:PixelRatio.getPixelSizeForLayoutSize(5),
      justifyContent: "center",
      alignItems: 'center',
      lineHeight:PixelRatio.getPixelSizeForLayoutSize(6.2 ),
    },
    extra: {
      left: 75,
      lineHeight: 32,
      marginBottom:20
    },
    extra2: {
      left: 30,
      marginBottom:15
    },  scrollView: {
      width: '100%',
      height: 100,
    },
    scrollContent: {
      width: 1000, // Width of the scrollable content
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#007BFF',
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
    },  
    splashWrapper: {
      height: 10,
      width: 200,
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
  
  
  export default adharconsentstyles;
  