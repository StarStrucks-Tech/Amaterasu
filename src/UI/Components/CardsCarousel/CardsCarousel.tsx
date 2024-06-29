import React, { useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Animated } from 'react-native';
import Pagination from './Pagination';
import style from './styles';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create(style);

const CardsCarousel = ({ data, renderItem }) => {
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [listData] = useState([...data, ...data, ...data]);

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    if (index >= data.length && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: index % data.length, animated: false });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={listData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScrollEnd}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          getItemLayout={(data, index) => (
            { length: width, offset: width * index, index }
          )}
          style={styles.carousel}
        />
        <Pagination data={data} scrollX={scrollX} />
      </View>
    </View>
  );
};


export default CardsCarousel;