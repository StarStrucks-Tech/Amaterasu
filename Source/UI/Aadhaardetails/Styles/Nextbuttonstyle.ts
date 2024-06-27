import { StyleSheet, PixelRatio } from "react-native";

const Nextbuttonstyle = StyleSheet.create({
  nextButton: {
    marginTop:PixelRatio.getPixelSizeForLayoutSize(8),
    height:  PixelRatio.getPixelSizeForLayoutSize(12),
    width:  PixelRatio.getPixelSizeForLayoutSize(90),
    borderRadius:  PixelRatio.getPixelSizeForLayoutSize(2),
    borderColor: '#FFFFE4',
    borderWidth:  PixelRatio.getPixelSizeForLayoutSize(0.3),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#D05F33",
  },
  nextButtonText: {
    color: "#FFFFE4",
  },
  });
  
  export default Nextbuttonstyle;