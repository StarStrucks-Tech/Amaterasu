
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import AvatarCircle from '../AvatarCircle';
import { styles } from './styles';

interface HeaderProps {
  username: string;
  profileImage: ImageSourcePropType;
}

const Header: React.FC<HeaderProps> = ({ username, profileImage }) => {
  return (
    <View style={styles.header}>
        <View style={styles.subHeader}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.username}>{username}</Text>
        </View>
   
      <View>  
      <AvatarCircle radius={20} imageSource={profileImage}
      />
      </View>
    </View>
  );
};


export default Header;
