import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: 'column',
  },
  head: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    fontSize: 28,
    alignContent: 'center',
    textAlign: 'center',
    color: '#000000',
    top: -374,
  },
  subhead: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: 13,
    alignContent: 'center',
    textAlign: 'center',
    color: '#262123',
    top: -330,
  },
  waitingText: {
    alignContent: 'center',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
    color: '#7E7E7E',
    fontFamily: 'Open Sans',
    lineHeight: 18,
    top: -394,
  },
  container: {
    width: '100%',
    backgroundColor: '#FFFFE4',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  resendText: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 12,
    alignContent: 'center',
    textAlign: 'center',
    color: '#7E7E7E',
    top: -228,
  },
  boldText: {
    color: '#44AC9E',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#D05F33',
    width: 140,
    height: 31,
    alignItems: 'center',
    borderRadius: 5,
    // marginVertical:10
    gap: 10,
    marginTop: -40,
    marginBottom: 20,
    top: -168,
  },
  buttontext: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
    top: 3.2,
  },
});
export default styles;
