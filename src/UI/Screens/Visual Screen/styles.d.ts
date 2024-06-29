import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    borderRadius: 20, 
    overflow: 'hidden',
    marginBottom: 30,
  },
  image: {
    width: 350,
    height: 300,
  },
  lottieContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 350,
    height: 300,
  },
});

export default styles;
