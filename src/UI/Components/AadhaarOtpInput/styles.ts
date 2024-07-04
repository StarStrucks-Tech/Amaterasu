// otpInputsStyles.js or otpInputsStyles.tsx

import { StyleSheet, PixelRatio } from 'react-native';
import Constant from '../../../UI-Constants/Constant.json';

const AadhaarotpInputsStyles = StyleSheet.create({
  otpView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  inputView: {
    borderBottomColor: Constant.Colors.COLOR_GREY_DARK,
    borderBottomWidth: PixelRatio.getPixelSizeForLayoutSize(1),
    textAlign: 'center',
    fontWeight: '700',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
    color: Constant.Colors.BLACK,
    width: PixelRatio.getPixelSizeForLayoutSize(10),
    height: PixelRatio.getPixelSizeForLayoutSize(14),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(1),
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  eyeContainer: {marginTop:PixelRatio.getPixelSizeForLayoutSize(10),
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    width: PixelRatio.getPixelSizeForLayoutSize(8),
    height: PixelRatio.getPixelSizeForLayoutSize(6.8),
    marginRight:PixelRatio.getPixelSizeForLayoutSize(3),
  },
  eyeText: {
    fontSize:PixelRatio.getPixelSizeForLayoutSize(5),
    fontWeight: '500',
    color: Constant.Colors.GRAY,
  },
});

export default AadhaarotpInputsStyles;
