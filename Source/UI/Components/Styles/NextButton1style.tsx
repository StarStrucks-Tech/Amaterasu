import { StyleSheet } from "react-native";

const Nextbutton1style = StyleSheet.create(
  { container:
    {top:20
      ,marginBottom:-30
    },button: {
    backgroundColor: '#D05F33',
    height: 40,
    width: 130,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFE4',
    fontFamily: 'Open Sans',
  },checkedButton: {
    height: 40,
    width: 130,
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#D05F33",
    marginTop: 20,
    marginBottom: -30,
  },
  uncheckedButton: {
    height: 40,
    width: 130,
    borderRadius:2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#7E7E7E",
    marginTop: 20,
    marginBottom: -30,
  },
  });
  
  export default Nextbutton1style;