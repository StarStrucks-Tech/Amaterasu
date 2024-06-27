import { StyleSheet, PixelRatio } from 'react-native';
import Colors from '../../Components/Colors';

export const adhaardetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.bgcolor,
  },
  signupText: {
    fontSize:PixelRatio.getPixelSizeForLayoutSize(9) ,
    fontFamily: 'Helvetica Neue',
    color: Colors.textcolor,
    lineHeight: PixelRatio.getPixelSizeForLayoutSize(11),
    textAlign: 'center',
  },
  protectionContainer: {
    flexDirection: "row",
    backgroundColor: Colors.secureComponentcolor,
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
    color: Colors.aadharidetailsplaceholder,
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
    borderColor: Colors.bordercolors,
    borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedRadioCircle: {
    backgroundColor: Colors.buttoncolor,
  },
  checkIcon: {
    height: PixelRatio.getPixelSizeForLayoutSize(4),
    width: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  radioText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4),
    fontWeight: "700",
    color: Colors.radiotextColor,
  },
  imageStyle: {marginBottom:PixelRatio.getPixelSizeForLayoutSize(10),
    marginTop:PixelRatio.getPixelSizeForLayoutSize(20),
    height: PixelRatio.getPixelSizeForLayoutSize(70),
    width: PixelRatio.getPixelSizeForLayoutSize(80),
  },
});
