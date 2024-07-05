import { View, Text, ImageSourcePropType } from 'react-native';
import AvatarCircle from '../AvatarCircle';
import { styles } from './styles';
import Constants from '../../../UI-Constants/Constant.json';
import React from 'react';

/**
 * HeaderProps defines the properties required for the Header component.
 * @property {string} username - The name of the user to be displayed.
 * @property {ImageSourcePropType} profileImage - The source of the user's profile image.
 * @property {number} avatarRadius - The radius of the avatar circle.
 */
type HeaderProps = {
  username: string;
  profileImage: ImageSourcePropType;
  avatarRadius: number;
};


/**
 * Header component displays a welcome message, username, and user avatar.
 */
const Header = ({ username, profileImage, avatarRadius }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <Text style={styles.welcomeText}>{Constants.TextConstants.WELCOME_BACK}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View>  
        <AvatarCircle radius={avatarRadius} imageSource={profileImage} />
      </View>
    </View>
  );
};

export default Header;