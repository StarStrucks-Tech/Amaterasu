import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
import BoxComponent from './BoxComponent';
import { ImageSourcePropType } from 'react-native';

interface BoxDataProps {}

interface BoxItem {
  id: number;
  name: string;
  imageSource: ImageSourcePropType;
  radius: number;
}

const BoxData: React.FC<BoxDataProps> = () => {
  const [boxes] = useState<BoxItem[]>([
    { id: 1, name: 'John Doe', imageSource: require('./assets/image1.jpeg'), radius: 11 },
    { id: 2, name: 'Jane Smith', imageSource: require('./assets/image2.jpeg'), radius: 11 },
    { id: 3, name: 'abc', imageSource: require('./assets/image3.jpeg'), radius: 11 },
    { id: 4, name: 'abc', imageSource: require('./assets/image3.jpeg'), radius:11 },
    { id: 5, name: 'Abccc defghijklkinmhhgdvgngvnfg', imageSource: require('./assets/image3.jpeg'), radius: 11 },
    // Add more boxes as needed
  ]);

 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
       horizontal 
       contentContainerStyle={styles.scrollContainer} 
       showsHorizontalScrollIndicator={false}
      >
        {boxes.map(box => (
           <View key={box.id} style={styles.boxWrapper}>
          <BoxComponent
          
            imageSource={box.imageSource}
            name={box.name}
            radius={box.radius}
          />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  boxWrapper: {
    marginHorizontal: 5,
    
  },
});

export default BoxData;
