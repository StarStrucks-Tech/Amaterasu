import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Pagination = ({ data, scrollX }) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, i) => {
        const inputRange = [
          (i - 1) * width,
          i * width,
          (i + 1) * width
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={i.toString()}
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -30, // Adjust this value to position the pagination 20-30px below the carousel
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#595959',
    marginHorizontal: 8,
  },
});

export default Pagination;


//  { key: '3', bankName: 'Bank hai', balance: '$2', amount: '100000', accountHolder: 'John the Don', accountNumber: '1234567890123456' },
