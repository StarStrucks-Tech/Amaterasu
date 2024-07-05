import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, Animated, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Pagination from './Pagination';
import styles from './styles';
import DebitCard from './DebitCard';

const { width, height } = Dimensions.get('window');

type CardsCarouselProps = {
  data: any[];
};

const CardsCarousel = ({ data }: CardsCarouselProps) => {
  const flatListRef = useRef<FlatList<any>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [listData] = useState([...data, ...data, ...data]);

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    if (index >= data.length && flatListRef.current !== null) {
      flatListRef.current.scrollToIndex({ index: index % data.length, animated: false });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <FlatList
          ref={flatListRef}
          data={listData}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <DebitCard item={item} />
            </View>
          )}
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