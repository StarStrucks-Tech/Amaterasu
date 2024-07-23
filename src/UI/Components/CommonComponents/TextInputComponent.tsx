import React,{useState} from 'react';
import { TextInput as PaperTextInput, HelperText } from 'react-native-paper';
type NumericTextInputProps={
  value: any,
  onChangeText: any,
  label: string,
  keyboardType: any,
  textlength: any,
  mode:any,
  textColor: string,
  width: any,
  }
const NumericTextInput = (props: NumericTextInputProps) => {
  const [internalValue, setInternalValue] = useState(props.value);
  const [error, setError] = useState('');

  const handleTextChange = (text) => {
    // Remove any non-numeric characters from the input
    const numericText = text.replace(/[^0-9]/g, '');

    // Update the internal state but do not trigger the external onChangeText
    setInternalValue(numericText);

    // Check the length of the numeric input
    if (numericText.length ===props.textlength ) {
      // If exactly 12 digits, update the external state and clear error
      props.onChangeText(numericText);
      setError('');
    } else {
      // If not exactly 12 digits, set the error message
      setError('Number must be exactly 12 digits');
    }
  };

  return (
    <>
      <PaperTextInput
      mode={props.mode}
      style={{backgroundColor:"#FFFFE4" , borderBottomWidth:5, borderColor:"#E0E0E0", width:props.width}}
        value={internalValue}
        onChangeText={handleTextChange}
        theme={{colors:{primary:props.textColor }}} 
        keyboardType={props.keyboardType}
        error={!!error}
        
        textColor={props.textColor}
        label={props.label}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

export default NumericTextInput;
