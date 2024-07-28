import { StyleSheet } from "react-native";
import { STYLES,SIZES,COLORS } from "../../Constants";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: STYLES.TAB_ICON_CONTAINER.justifyContent,
      alignItems: STYLES.TAB_ICON_CONTAINER.alignItems,
      backgroundColor: COLORS.DARK_BG, // Light Salmon background color
    },
    text: {
      fontSize: SIZES.BODY2,
      color: COLORS.ACCENT,
    },
  });