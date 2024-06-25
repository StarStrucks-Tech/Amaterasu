import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor:'#FFFFE4',
      borderRadius: 10,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Open Sans',
      color: '#000000',
      marginBottom: 15,
      marginRight:20,
    },
    description: {
      marginBottom: 20,
      textAlign: 'center',
      color: '#421C25',
      fontWeight:'black',

    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      height: 40,
      width: 130,
      borderRadius: 5,
      marginBottom: -30,
      borderColor: '#FFFFE4',
      borderWidth: 1,
      justifyContent: 'center',
      backgroundColor: "#D05F33",
      marginTop: 20, 
    },
    checkbox: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: 'gray',
      marginRight: 10,
      marginTop: 3,
    },
    checked: {
      backgroundColor: '#7E7E7E',
    },
    checkboxLabel: {
      flex: 1,
      textAlign: 'center',
      color: '#421C25',
      fontWeight:'black',
      marginTop:10,

    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flex: 1,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    skipButton: {
      backgroundColor:'#D05F33',
      marginRight: 10,
    },
    closeButton: {
      backgroundColor: 'gray',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    checkboxOuter: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop: 3,
      },
      checkboxInner: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#007AFF',
      },
  });

  export default styles;