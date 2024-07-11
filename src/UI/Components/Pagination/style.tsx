import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    pagination: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 65,
      alignSelf: 'center',
    },
    dot: {
      height: 10,
      borderRadius: 5,
      backgroundColor: '#595959',
      marginHorizontal: 8,
    },
  });


  export default styles;