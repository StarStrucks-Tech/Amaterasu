import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
import BoxComponent from './BoxComponent';

import {boxes} from './BoxDataConstants'
import { BoxItem } from './BoxDataConstants';

function BoxData() {
  const [boxItems] = useState<BoxItem[]>(boxes);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {boxItems.map(box => (
          <View key={box.id} style={styles.boxWrapper}>
            <BoxComponent
              imageSource={box.imageSource}
              name={box.name}
              radius={box.radius}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 10
  },
  boxWrapper: {
    marginHorizontal: 5,
    
  },
});

export default BoxData;
