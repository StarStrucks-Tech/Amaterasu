import { StyleSheet } from 'react-native';

export const adhaardetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFE4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 27,
    fontFamily: 'Helvetica Neue',
    color: 'black',
    lineHeight: 32,
    textAlign: 'center',
    top: -40,
  },
  protectionContainer: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
    width: "100%",
  },
  lockIcon: {
    height: 20,
    width: 15,
    marginRight: 10,
  },
  protectionText: {
    fontFamily: 'Open Sans',
    color: "#7E7E7E",
  },
  consentContainer: {
    flexDirection: "row",
    alignItems: "center",
    top: 50,
    bottom: -70,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 5,
    margin: 10,
    borderColor: '#B2B2B2',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedRadioCircle: {
    backgroundColor: "#D05F33",
  },
  checkIcon: {
    height: 10,
    width: 14,
  },
  radioText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#262123",
  },
  imageStyle: {
    height: 210,
    width: 250,
    top: -90,
  },
});
