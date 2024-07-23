import { StyleSheet } from "react-native";
import { SIZES , COLORS,STYLES} from "../Constants";
 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:STYLES.TAB_ICON_CONTAINER.justifyContent,
      alignItems: STYLES.TAB_ICON_CONTAINER.alignItems,
      backgroundColor: COLORS.ACCENT,
    },
    text: {
      fontSize: SIZES.FONT,
      color: COLORS.LIGHT_TEXT,
    },
  });