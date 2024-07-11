import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flexGrow: 0.55,
  },
  cardContainer: {
    width: width * 0.8,
    marginHorizontal: (width * 0.2) / 2,
  },
});

export default styles;
