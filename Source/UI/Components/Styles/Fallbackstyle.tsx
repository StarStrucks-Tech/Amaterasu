import { StyleSheet } from "react-native";

const Fallbackstyle = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagsp: {
    height: 75,
    width: 83,
    top: -20,
    paddingBottom: 1,
    marginTop: 40
  },
  font: {
    color: 'black',
    fontFamily: 'Helvetica Neu',
    fontWeight: '600',
    fontSize: 24,
  },
  modalview: {
    height: "80%",
    width: "100%",
    marginBottom: 20,
    backgroundColor: '#FFFFE4',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 5,
  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 290,
    marginBottom: -80,
  },
  button1: {
    height: 40,
    backgroundColor: "#D05F33",
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button2: {
    height: 40,
    backgroundColor: "#7E7E7E",
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 17,
    color: "#FFFFE4",
    fontWeight: "600"
  }
  });
  
  export default Fallbackstyle;