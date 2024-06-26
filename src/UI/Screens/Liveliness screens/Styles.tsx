import { StyleSheet } from "react-native";
import { BORDER_RADIUS, COLORS, DIMENSIONS, FONT_SIZES, MARGIN, PADDING } from "../../../Utilities/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  camera: {
    width: DIMENSIONS.cameraWidth,
    height: DIMENSIONS.cameraHeight,
    borderRadius: BORDER_RADIUS.medium,
    overflow: 'hidden',
    backgroundColor: COLORS.black,
    alignItems: 'center',
  },
  cameraView: {
    alignSelf: 'center',
    width: DIMENSIONS.cameraViewWidth,
    height: DIMENSIONS.cameraViewHeight,
    backgroundColor: COLORS.black,
    marginTop: MARGIN.extraLarge,
    padding: PADDING.medium,
    marginBottom: MARGIN.large,
    overflow: 'hidden',
    borderRadius: BORDER_RADIUS.large,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: COLORS.overlayBackground,
    paddingVertical: PADDING.large,
    paddingTop: PADDING.large,
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: COLORS.secondary,
    fontSize: FONT_SIZES.medium,
    marginBottom: MARGIN.medium,
  },
  dot: {
    width: DIMENSIONS.dotSize,
    height: DIMENSIONS.dotSize,
    marginBottom: MARGIN.small,
    marginRight: MARGIN.small,
  },
  code: {
    color: COLORS.secondary,
    fontSize: FONT_SIZES.large,
    marginBottom: MARGIN.large,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.small,
    width: DIMENSIONS.buttonWidth,
    height: DIMENSIONS.buttonHeight,
    marginBottom: MARGIN.medium,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: FONT_SIZES.small,
    fontWeight: 'bold',
  },
});

export default styles;
