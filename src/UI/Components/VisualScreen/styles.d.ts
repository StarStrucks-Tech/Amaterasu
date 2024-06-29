// styles.ts

import { StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    marginBottom: DIMENSIONS.containerMarginBottom,
  },
  imageContainer: {
    width: '100%',
    height: DIMENSIONS.imageContainerHeight,
    borderRadius: 20, 
    overflow: 'hidden',
    marginBottom: DIMENSIONS.imageContainerMarginBottom,
  },
  image: {
    width: DIMENSIONS.imageWidth,
    height: DIMENSIONS.imageHeight,
  },
  lottieContainer: {
    width: '100%',
    height: DIMENSIONS.lottieContainerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: DIMENSIONS.lottieWidth,
    height: DIMENSIONS.lottieHeight,
  },
});

export default styles;
