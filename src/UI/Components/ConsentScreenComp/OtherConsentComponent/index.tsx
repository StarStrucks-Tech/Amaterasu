import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../../Screens/ConsentScreens/OtherConsent/styles';

type ConsentComponentProps = {
  containerStyle: object;
  imageSource: number;
  headerText: string;
  text: string;
}

export const ConsentComponent = (props:ConsentComponentProps) => {
  return (
    <View style={props.containerStyle}>
      <Image source={props.imageSource} style={styles.image} />
      <Text style={styles.header}>{props.headerText}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
