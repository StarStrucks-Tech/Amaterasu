// nextButtonStyles.js or nextButtonStyles.tsx

import { StyleSheet, PixelRatio } from 'react-native';
import Colors from '../../Components/Colors';

const nextButtonStyles = StyleSheet.create({
  verifyOtpbtn: {
    justifyContent: 'center',
    width: PixelRatio.getPixelSizeForLayoutSize(46),
    height: PixelRatio.getPixelSizeForLayoutSize(11),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(6),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(2),
    alignSelf: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color:Colors.bgcolor,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
  },
  checkedButton: {
    backgroundColor: Colors.buttoncolor,
  },
  uncheckedButton: {
    backgroundColor: Colors.seconarycolor,
  },
});

export default nextButtonStyles;
