import React from 'react'
import { View, Text } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'

type LoadingProps = {
    size: any;
    colors: any;
}

const Loading = (props:LoadingProps) => {
// render
    return (
        <View >
            <ActivityIndicator animating={true} size={props.size} color={props.colors}/>
        </View>
    )
}

export default Loading;
