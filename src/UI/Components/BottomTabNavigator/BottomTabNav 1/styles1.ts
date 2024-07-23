import React from "react";
import { StyleSheet } from "react-native";
import { COLORS} from "../Constants";
export const styles = StyleSheet.create({
    centerIconContainer: {
      position: 'absolute', // To position the central icon absolutely
      bottom: 40, // Adjust this value to control how much the icon is lifted
      zIndex: 10, // Ensure the middle icon appears above other elements
    },
    centerIconWrapper: {
      backgroundColor: COLORS.BGcolor, // Background color for the wrapper
      borderRadius: 50, // Ensure the wrapper is circular
      elevation: 5, // Add elevation for a shadow effect if needed
      padding: 5, // Optional: add padding to give some space around the AvatarCircle
    },
    tabIconContainer: {
      backgroundColor: 'transparent', // Ensure the icon containers are transparent
      
    },
  });
