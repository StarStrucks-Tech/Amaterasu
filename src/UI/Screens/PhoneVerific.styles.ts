import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFE4',
    padding: 16
    // marginTop:-9
  },
  head: {
    fontFamily: 'Helvetica Neue',
    color: '#000000',
    fontSize: 30,
    lineHeight: 32,
    // alignItems:'center'
    fontWeight: '600',
    marginBottom: 100,
    bottom:-69
    // top: 40

  },

  subheadingContainer: {
    paddingHorizontal: 16
  },
  subhead: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize:15.4,
    color: '#262123',
    lineHeight: 24,
    width:'100%',
    marginBottom:60,
    top: 29,
    bottom:-15,
    textAlign: 'center',
    // paddingHorizontal:-10,
    alignSelf: "stretch"
    // left:7
  },

  centeredText:{
    alignSelf: 'center',
    marginBottom:20
    
},

  inputcontainer: {
    width: '92%',
    marginBottom: 16
  },
  label: {
    fontFamily:'Open Sans',
    fontSize: 15,
    fontWeight: '600',
    lineHeight:18,
    marginBottom: -40,
    color: '#421C25',
    left: 2,
    top:12
    
  },
  input: {
    borderBottomColor: '#D05F33',
    borderBottomWidth:3,
    paddingHorizontal: 15,
    color:'black',
    paddingVertical:0,
    width: 335,
    height:43,
    marginTop: 20,
    bottom:-5,
    top: 27,
    // color:'black'
    marginBottom:13
  },
  description: {
    fontFamily:'Open Sans',
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18,
    width: 325,
    left: 5,
    bottom:-5,
    marginBottom: 20,
    // alignItems:'center',
    color: '#421C25'
    
  },
  boldText: {
    fontWeight: '700',
  },
 
  imagei: {
    width: 300,
    height:292,
    left:20,
    resizeMode: 'contain',
    // marginBottom:-70
    
  },
  button: {
    backgroundColor: '#D05F33',
    width: 140,
    height:31,
    alignItems: 'center',
    borderRadius: 5,
    // marginVertical:10
    gap:10,
    marginTop: 30,
    marginBottom: 20,
    top:34
    
  },
  buttontext: {
     fontSize: 16,
    fontWeight: '600',
    color:'white',
    marginBottom: 10,
    top:3.2
  }

  
  
 })
export default styles;