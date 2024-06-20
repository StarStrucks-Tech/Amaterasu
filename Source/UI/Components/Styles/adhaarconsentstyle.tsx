import { StyleSheet } from "react-native";


const adharconsentstyles =StyleSheet.create({
    container: {
      backgroundColor: '#FFFFE4',
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
      height:'100%'
    },  container1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inbox: {
      borderBottomColor: '#E0E0E0',
      borderBottomWidth:3,
      paddingHorizontal: 12,
      paddingVertical:0,
      width:'90%',
      marginTop: 20,
      top: 20,
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
    signup: {
      fontSize: 23  ,
      fontFamily:'Helvetica Neue',
      color: 'black',
      lineHeight:32,
      justifyContent: "center",
      alignItems:"center",
      fontWeight: '400',
      top:-23
    },
    imagsp: {
      height: 250,
      width: 250,
      top: -100,
      paddingBottom:1,
      marginTop: 100
  
    },
    subhead: {
      fontFamily: 'Open Sans',
      fontWeight: '100',
      fontSize: 13,
      color:'#262123',
      justifyContent: "center",
      alignItems: 'center',
      top:-7,
      lineHeight:18
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
  