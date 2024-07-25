import { ImageSourcePropType } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'; 


export type BoxItem = {
  id: number;
  name: string;
  iconName: string;
  radius: number;
};

export const boxes: BoxItem[] = [
  { id: 1, name: 'John Doe', iconName: 'person', radius: 11 },
  { id: 2, name: 'Jane Smith', iconName: 'person', radius: 11 },
  { id: 3, name: 'abc', iconName: 'person', radius: 11 },
  { id: 4, name: 'xyz pqr', iconName: 'person', radius: 11 },
  { id: 5, name: 'Abccc defghijklkinmhhgdvgngvnfg', iconName: 'person', radius: 11 },
  // Add more boxes as needed
];
