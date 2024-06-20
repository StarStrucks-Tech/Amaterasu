// SplashStyles.js

import { StyleSheet } from 'react-native';

const splashstyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingBottom: 30, // Adjust as needed
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 228, 0.7)', // Semi-transparent background
  },
  box: {
    flexDirection: 'row',
    width: 330,
    height: 55,
    backgroundColor: '#262123',
    borderWidth: 1,
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: '#000000',
    borderRadius: 15,
    shadowOpacity: 0.1,
  },
  circle: {
    width: '15%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#D05F33',
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeArrowIcons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default splashstyles;
