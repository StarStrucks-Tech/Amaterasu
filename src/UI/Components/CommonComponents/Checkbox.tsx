import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import Constant from '../../../UI-Constants/Constant.json'

type CheckBoxComponentprops={
  uncheckedColor: any,
  color:any,

}
const CheckboxComponent = (props: CheckBoxComponentprops) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
      <View >
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={handleCheck}
          uncheckedColor={props.uncheckedColor}
          color={props.color}
        />
      </View>
  );
};


export default CheckboxComponent;