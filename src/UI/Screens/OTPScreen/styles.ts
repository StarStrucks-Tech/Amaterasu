import { StyleSheet, PixelRatio} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFE4',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
  },
  head: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
    textAlign: 'center',
    color: '#000000',
     marginTop: PixelRatio.getPixelSizeForLayoutSize(0),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(10),
  },
  subhead: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    textAlign: 'center',
    color: '#262123',
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(2),
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(7),
  },
  waitingText: {
    fontWeight: '600',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    color: '#7E7E7E',
    fontFamily: 'Open Sans',
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(6),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(1),
    textAlign: 'center',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(1),
  },
  resendText: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4),
    color: '#7E7E7E',
    textAlign: 'center',
    marginBottom: 4,
    alignSelf: 'center',
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  boldText: {
    color: '#44AC9E',
    fontWeight: '600',
  },
  button: {
    height: PixelRatio.getPixelSizeForLayoutSize(12),
    width: PixelRatio.getPixelSizeForLayoutSize(45),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(2),
    borderColor: '#FFFFE4',
    borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#D05F33",
    marginTop: PixelRatio.getPixelSizeForLayoutSize(0),
    position: 'relative',
  },
  buttontext: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
    fontWeight: '600',
    color: 'white',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(0),
  },
  timerSection: {
    alignItems: 'center',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(80),
  },
});
export default styles;
