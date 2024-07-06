import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import constants from '../../../../UI-Constants/Constant.json'; // Adjusted import path

const { width, height } = Dimensions.get('window');

const StaticScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/screenlight.png")}
        style={styles.image}
      />
      <Text style={styles.title}>{constants.TextConstants.TITLE}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{constants.TextConstants.BUTTON_TEXT}</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>{constants.TextConstants.FOOTER_TEXT}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: constants.Styles.CONTAINER_FLEX,
  } as ViewStyle,
  image: {
    marginTop: height * constants.Styles.IMAGE_MARGIN_TOP,
    width: width * constants.Styles.IMAGE_WIDTH,
    height: height * constants.Styles.IMAGE_HEIGHT,
    alignSelf: 'center',
  } as ImageStyle,
  title: {
    marginTop: height * constants.Styles.TITLE_MARGIN_TOP,
    fontSize: constants.Styles.TITLE_FONT_SIZE,
    alignSelf: 'center',
    fontFamily: constants.Styles.TITLE_FONT_FAMILY,
    color: constants.Styles.TITLE_COLOR,
    letterSpacing: constants.Styles.TITLE_LETTER_SPACING,
  } as TextStyle,
  button: {
    borderRadius: constants.Styles.BUTTON_BORDER_RADIUS,
    top: height * constants.Styles.BUTTON_TOP,
    backgroundColor: constants.Styles.BUTTON_BACKGROUND_COLOR,
    paddingVertical: constants.Styles.BUTTON_PADDING_VERTICAL,
    paddingHorizontal: constants.Styles.BUTTON_PADDING_HORIZONTAL,
    alignSelf: 'center',
  } as ViewStyle,
  buttonText: {
    color: constants.Styles.BUTTON_TEXT_COLOR,
    fontWeight: constants.Styles.BUTTON_TEXT_FONT_WEIGHT,
    textAlign: constants.Styles.BUTTON_TEXT_ALIGN,
    alignSelf: 'center',
    width: width * constants.Styles.BUTTON_TEXT_WIDTH,
    height: height * constants.Styles.BUTTON_TEXT_HEIGHT,
    fontSize: constants.Styles.BUTTON_TEXT_FONT_SIZE,
  } as TextStyle,
  footerText: {
    bottom: height * constants.Styles.FOOTER_TEXT_BOTTOM,
    fontSize: constants.Styles.FOOTER_TEXT_FONT_SIZE,
    textAlign: constants.Styles.FOOTER_TEXT_ALIGN,
    fontWeight: constants.Styles.FOOTER_TEXT_FONT_WEIGHT,
    color: constants.Styles.FOOTER_TEXT_COLOR,
  } as TextStyle,
});

export default StaticScreen;
