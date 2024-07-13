import { StyleSheet, PixelRatio } from 'react-native';
import Constant from '../../../UI-Constants/Constant.json'

export const adhaardetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Constant.Colors.COLOR_LIGHT_YELLOW,
  },
  signupText: {
    fontSize:PixelRatio.getPixelSizeForLayoutSize(9) ,
    fontFamily: 'Helvetica Neue',
    color: Constant.Colors.BLACK,
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(11),
    textAlign: 'center',
  },
  protectionContainer: {
    flexDirection: "row",
    backgroundColor: Constant.Colors.COLOR_GREY_LIGHT,
    alignItems: "center",
    justifyContent: 'center',
    padding: PixelRatio.getPixelSizeForLayoutSize(4),
    width: "100%",
  },
  lockIcon: {
    height: PixelRatio.getPixelSizeForLayoutSize(7),
    width:PixelRatio.getPixelSizeForLayoutSize(5),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(4),
  },
  protectionText: {
    fontFamily: 'Open Sans',
    color: Constant.Colors.COLOR_GREY_DARK,
  },
  consentContainer: {marginTop:PixelRatio.getPixelSizeForLayoutSize(25),
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: PixelRatio.getPixelSizeForLayoutSize(7),
    width: PixelRatio.getPixelSizeForLayoutSize(7),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(2),
    margin: PixelRatio.getPixelSizeForLayoutSize(4),
    marginBottom:  PixelRatio.getPixelSizeForLayoutSize(8),
    borderColor: Constant.Colors.COLOR_BORDER,
    borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedRadioCircle: {
    backgroundColor: Constant.Colors.COLOR_ORANGE,
  },
  checkIcon: {
    height: PixelRatio.getPixelSizeForLayoutSize(4),
    width: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  radioText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4),
    fontWeight: "700",
    color: Constant.Colors.COLOR_DARK_BROWN,
  },
  imageStyle: {marginBottom:PixelRatio.getPixelSizeForLayoutSize(10),
    marginTop:PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(70),
    width: PixelRatio.getPixelSizeForLayoutSize(80),
  },
});
