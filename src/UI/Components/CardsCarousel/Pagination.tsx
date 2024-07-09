import React from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import styles from './PaginationStyle';


const { width } = Dimensions.get('window');

const Pagination = ({ data, scrollX }: { data: any[], scrollX: Animated.Value}) => {
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

export default Pagination;