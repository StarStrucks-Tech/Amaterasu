import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carouselContainer: {
      height: height * 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    carousel: {
      flexGrow: 0.55,
    },
  });
  

export default styles;