import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import styles from './style';

const {width} = Dimensions.get('window');

// Define the type for the props
interface PaginationProps {
  data: any[];
  scrollX: Animated.Value;
}

/**
 * Pagination component to display a series of dots indicating the current page in a scroll view.
 *
 * @param {PaginationProps} props - The props for the Pagination component.
 * @param {any[]} props.data - The data array representing the number of pages.
 * @param {Animated.Value} props.scrollX - The animated value representing the horizontal scroll position.
 * @returns {JSX.Element} The rendered Pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({data, scrollX}) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
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
