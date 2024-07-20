import React from "react";
import { View, Text } from "react-native";
import { useTheme } from 'react-native-paper';

const HomeScreen=()=>{
    const theme = useTheme();

    return(
        <View>
            <Text>
               Home
            </Text>
        </View>
    )
}
export default HomeScreen;