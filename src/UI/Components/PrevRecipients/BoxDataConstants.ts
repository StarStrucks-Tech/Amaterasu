import { ImageSourcePropType } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; 


export type BoxItem = {
  id: number;
  name: string;
  imageSource: ImageSourcePropType;
  radius: number;
};

export const boxes: BoxItem[] = [
  { id: 1, name: 'John Doe', imageSource: require('./assets/image1.jpeg'), radius: 11 },
  { id: 2, name: 'Jane Smith', imageSource: require('./assets/image1.jpeg'), radius: 11 },
  { id: 3, name: 'abc', imageSource: require('./assets/image1.jpeg'), radius: 11 },
  { id: 4, name: 'xyz pqr', imageSource: require('./assets/image1.jpeg'), radius: 11 },
  { id: 5, name: 'Abccc defghijklkinmhhgdvgngvnfg', imageSource: require('./assets/image1.jpeg'), radius: 11 },
  // Add more boxes as needed
];
