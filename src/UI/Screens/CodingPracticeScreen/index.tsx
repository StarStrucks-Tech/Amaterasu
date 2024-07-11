/**
 * EmailVerificationScreen Component
 *
 * This component renders a screen for email verification and user name input.
 * It includes form fields for email and name, along with explanatory text and an image.
 * The screen is wrapped in a KeyboardAwareScrollView to handle keyboard interactions.
 *
 */

import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Button from '../../Components/Button';
import {Pressable} from 'react-native';
import {Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

/**
 * Documentation on the top for the component to tell what it is actually doing
 */
const CodingPracticeScreen = (props: CodingPracticeScreenProps) => {
  /**
   * State for storing the user's name
   * @type {[string, function]}
   */

  return (
    <KeyboardAwareScrollView>
      <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require('../../../Assets/images/email_img.png')}
            style={styles.icon}
          />
          <Text style={styles.title}>{props.title}</Text>
          <Button />
        </View>
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

type CodingPracticeScreenProps = {
  title: string;
};
export default CodingPracticeScreen;
