import { StyleSheet ,PixelRatio} from "react-native";
const styles = StyleSheet.create({
  timerText: {
    alignContent: 'center',
    textAlign: 'center',
    color: '#7E7E7E',
    fontFamily: 'Open Sans',
    marginBottom: PixelRatio.getPixelSizeForLayoutSize(18),
    fontSize: PixelRatio.getPixelSizeForLayoutSize(4.7),
  },
});
export default styles;