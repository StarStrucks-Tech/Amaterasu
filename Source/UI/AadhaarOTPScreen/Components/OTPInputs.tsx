import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import otpInputsStyles from '../Styles/OTPInputstyle';
import Colors from '../../Components/Colors';

const OTPInputs = ({ isChecked, onOtpFilled }) => {
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');
  const [sisChecked, setSisChecked] = useState(isChecked);
  const [isOtpFilled, setIsOtpFilled] = useState(false);

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  useEffect(() => {
    checkIfAllFieldsFilled();
  }, [f1, f2, f3, f4, f5, f6]);

  const checkIfAllFieldsFilled = () => {
    if (f1 && f2 && f3 && f4 && f5 && f6) {
      setIsOtpFilled(true);
      onOtpFilled(true);
    } else {
      setIsOtpFilled(false);
      onOtpFilled(false);
    }
  };

  const handleTextInputChange = (setter, text, nextRef, prevRef) => {
    setter(text);
    if (text.length >= 1 && nextRef) {
      nextRef.current.focus();
    } else if (text.length < 1 && prevRef) {
      prevRef.current.focus();
    }
  };

  const togglePasswordVisibility = () => {
    setSisChecked(!sisChecked);
  };

  return (
    <View>
      <View style={otpInputsStyles.otpView}>
        <TextInput
          ref={et1}
          style={[otpInputsStyles.inputView, { borderColor: f1.length >= 1 ? Colors.buttoncolor : Colors.seconarycolor}]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt) => handleTextInputChange(setF1, txt, et2)}
          secureTextEntry={!sisChecked}
        />
        <TextInput
          ref={et2}
          style={[otpInputsStyles.inputView, { borderColor: f2.length >= 1 ? Colors.buttoncolor : Colors.seconarycolor }]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt) => handleTextInputChange(setF2, txt, et3, et1)}
          secureTextEntry={!sisChecked}
        />
        <TextInput
          ref={et3}
          style={[otpInputsStyles.inputView, { borderColor: f3.length >= 1 ?Colors.buttoncolor  : Colors.seconarycolor }]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt) => handleTextInputChange(setF3, txt, et4, et2)}
          secureTextEntry={!sisChecked}
        />
        <TextInput
          ref={et4}
          style={[otpInputsStyles.inputView, { borderColor: f4.length >= 1 ? Colors.buttoncolor : Colors.seconarycolor }]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt) => handleTextInputChange(setF4, txt, et5, et3)}
          secureTextEntry={!sisChecked}
        />
        <TextInput
          ref={et5}
          style={[otpInputsStyles.inputView, { borderColor: f5.length >= 1 ?Colors.buttoncolor :Colors.seconarycolor }]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt) => handleTextInputChange(setF5, txt, et6, et4)}
          secureTextEntry={!sisChecked}
        />
        <TextInput
          ref={et6}
          style={[otpInputsStyles.inputView, { borderColor: f6.length >= 1 ? Colors.buttoncolor :Colors.seconarycolor }]}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt) => handleTextInputChange(setF6, txt, null, et5)}
          secureTextEntry={!sisChecked}
        />
      </View>
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <View style={otpInputsStyles.eyeContainer}>
          <Image
            source={sisChecked ? require('../../../Assets/image/eye.png') : require('../../../Assets/image/eye-outline.png')}
            style={otpInputsStyles.eyeIcon}
          />
          <Text style={otpInputsStyles.eyeText}>{sisChecked ? "DON'T SHOW" : 'SHOW'}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OTPInputs;
