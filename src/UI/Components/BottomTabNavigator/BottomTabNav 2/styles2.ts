import { StyleSheet } from "react-native";
import { COLORS } from "../Constants";
 export const styles = StyleSheet.create({
    tabBarOuterContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.BG,
      paddingVertical: 20,
      marginBottom: 40, // Uplifts the bar by adding margin to the bottom
      shadowColor: '#000', // Shadow color
      shadowOffset: {width: 0, height: 2}, // Shadow offset
      shadowOpacity: 0.3, // Shadow opacity
      shadowRadius: 5, // Shadow radius
      elevation: 5, // For Android shadow effect
    },
    tabBarOvalContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.Incolor,
      borderRadius: 40, // Oval shape
      borderWidth: 2, // Optional: border width
      borderColor: COLORS.Incolor, // Optional: border color
      paddingVertical: 5,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '90%', // Adjust to fit your design needs
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 7,
      borderRadius: 25,
      backgroundColor: COLORS.BGcolor,
    },
    activeInnerContainer: {
      backgroundColor: COLORS.BGcolor, // Background color for active state
    },
    tabLabel: {
      color: COLORS.TEXT,
      fontSize: 9,
      marginLeft: 2, // Space between icon and text
    },
  });
  