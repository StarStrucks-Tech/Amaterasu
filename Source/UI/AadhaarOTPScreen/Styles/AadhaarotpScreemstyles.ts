// otpscreenStyles.js or otpscreenStyles.tsx

import { StyleSheet, PixelRatio } from 'react-native';
import Colors from '../../Components/Colors';

const otpscreenStyles = StyleSheet.create({
  container: {
    height:"100%",
    backgroundColor: Colors.bgcolor,
  },
  resendView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    fontSize:  PixelRatio.getPixelSizeForLayoutSize(7),
    fontWeight: '700',
    marginTop:  PixelRatio.getPixelSizeForLayoutSize(34),
    color: 'black',
    alignSelf: 'center',
  },
  editAadhaarLink: {
    marginTop:PixelRatio.getPixelSizeForLayoutSize(30),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  editLinkText: {
    fontSize:  PixelRatio.getPixelSizeForLayoutSize(4),
    fontWeight: '400',
    color: Colors.seconarycolor,
    alignSelf: 'center',
  },
  editLink: {
    fontSize:  PixelRatio.getPixelSizeForLayoutSize(5),
    fontWeight: '600',
    color: Colors.secondary,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default otpscreenStyles;
