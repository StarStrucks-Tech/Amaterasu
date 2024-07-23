import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

type TextButtonProps={
    mode: any,
    textTitle: any,
    height: number,
    width: number,
    color: string,
    onPressNavigation: any,
    background:any,
    borderRadius: any,
};
const TextButton = (props: TextButtonProps) => {
// render
    return (
        <View>
            <Button mode={props.mode}
            style={{height: props.height,width:props.width, backgroundColor:props.background, borderRadius:props.borderRadius}} 
            theme={{colors:{primary:props.color}}} 
            onPress={()=>alert(props.onPressNavigation)}>
                {props.textTitle}
            </Button>
           
        </View>
    )
}

export default TextButton
