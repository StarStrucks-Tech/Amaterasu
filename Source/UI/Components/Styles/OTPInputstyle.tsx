import { StyleSheet } from "react-native";

const OTPInputstyle = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 60
  },
  inbox: {
    borderBottomColor: '#7E7E7E',
    borderBottomWidth: 3,
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 30, // Adjust width as needed to accommodate each digit
    height: 40, // Ensure consistent height for uniform appearance
    marginHorizontal: 5, // Adjust spacing between TextInput components
    color: 'black',
    textAlign: 'center'
  }
  });
  
  export default OTPInputstyle;