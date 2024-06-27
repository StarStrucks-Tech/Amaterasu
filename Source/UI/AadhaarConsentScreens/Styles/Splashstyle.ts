// SplashStyles.js

import { StyleSheet, PixelRatio } from 'react-native';
import Colors from '../../Components/Colors';

const splashstyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingBottom: PixelRatio.getPixelSizeForLayoutSize(10), // Adjust as needed
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 228, 0.7)', // Semi-transparent background
  },
  box: {
    flexDirection: 'row',
    width: PixelRatio.getPixelSizeForLayoutSize(110),
    height:PixelRatio.getPixelSizeForLayoutSize(19),
    backgroundColor: Colors.boxcolor,
    borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.3),
    alignItems: 'center',
    elevation: PixelRatio.getPixelSizeForLayoutSize(3.33),
    shadowOffset: {
      height: PixelRatio.getPixelSizeForLayoutSize(3.33),
      width: PixelRatio.getPixelSizeForLayoutSize(3.33),
    },
    shadowColor: Colors.primary,
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(5),
    shadowOpacity: PixelRatio.getPixelSizeForLayoutSize(0.03),
  },
  circle: {
    width: '15%',
    height: '80%',
    borderRadius:PixelRatio.getPixelSizeForLayoutSize(3.33),
    backgroundColor: Colors.buttoncolor,
    marginLeft: PixelRatio.getPixelSizeForLayoutSize(2.33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeArrowIcons: {
    width: PixelRatio.getPixelSizeForLayoutSize(8),
    height: PixelRatio.getPixelSizeForLayoutSize(8),
    resizeMode: 'contain',
  },
});

export default splashstyles;
