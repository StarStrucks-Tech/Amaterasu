import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

type TextButtonProps={
    textTitle: any,
    height: number,
    width: number,
    color: string,
    onPressNavigation: any,
};
const TextButton = (props: TextButtonProps) => {
// render
    return (
        <View>
            <Button mode='text'
            style={{height: props.height,width:props.width}} 
            theme={{colors:{primary:props.color}}} 
            onPress={()=>alert(props.onPressNavigation)}>
                {props.textTitle}
            </Button>
           
        </View>
    )
}

export default TextButton
