import { PixelRatio, StyleSheet } from "react-native";
import Colors from "../../Components/Colors";

const Fallbackstyle = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparent black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagsp: {
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    width: PixelRatio.getPixelSizeForLayoutSize(28),
    paddingBottom:PixelRatio.getPixelSizeForLayoutSize(1),
    marginTop: PixelRatio.getPixelSizeForLayoutSize(14)
  },
  font: {
    marginTop:PixelRatio.getPixelSizeForLayoutSize(10),
    textAlign:'center',
    color: Colors.textcolor,
    fontFamily: 'Helvetica Neu',
    fontWeight: '600',
    fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
  },
  modalview: {
    height: "85%",
    width: "100%",
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(7),
    backgroundColor: '#FFFFE4',
    alignItems: 'center',
    padding: PixelRatio.getPixelSizeForLayoutSize(3),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(3),
    shadowColor: 'black',
    elevation: PixelRatio.getPixelSizeForLayoutSize(3),
  },
  centerview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: PixelRatio.getPixelSizeForLayoutSize(100),
  },
  button1: {
    height: PixelRatio.getPixelSizeForLayoutSize(13),
    backgroundColor: Colors.buttoncolor,
    width: PixelRatio.getPixelSizeForLayoutSize(43),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:PixelRatio.getPixelSizeForLayoutSize(2)
  },
  button2: {
    height:  PixelRatio.getPixelSizeForLayoutSize(13),
    backgroundColor: Colors.subhead1,
    width:  PixelRatio.getPixelSizeForLayoutSize(43),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:  PixelRatio.getPixelSizeForLayoutSize(2)
  },
  buttonText: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
    color: Colors.bgcolor,
    fontWeight: "600"
  }
  });
  
  export default Fallbackstyle;