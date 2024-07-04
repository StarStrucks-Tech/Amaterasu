// otpscreenStyles.js or otpscreenStyles.tsx

import { StyleSheet, PixelRatio } from 'react-native';
import Constant from '../../../UI-Constants/Constant.json';

const otpscreenStyles = StyleSheet.create({
  container: {
    height:"100%",
    backgroundColor: Constant.Colors.COLOR_LIGHT_YELLOW,
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
    color: Constant.Colors.GRAY,
    alignSelf: 'center',
  },
  editLink: {
    fontSize:  PixelRatio.getPixelSizeForLayoutSize(5),
    fontWeight: '600',
    color: Constant.Colors.AQUA_GREEN,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
});

export default otpscreenStyles;
