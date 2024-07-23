
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import React,{useState} from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './Loading';
import TextButton from './TextButton';
import Constant from '../../../UI-Constants/Constant.json';
import CheckBoxComponent from './Checkbox';
import OTPInput from './OTPInput';
import NumericTextInput from './TextInputComponent';
export default function Main() {
  const [value, setValue] = useState('');
  const handleOtpComplete = (e: any) => {
    console.log('Entered OTP:', e);
  };
    return (
        <PaperProvider> 
        <SafeAreaView>
        <TextButton 
        background={Constant.Colors.COLOR_ORANGE} 
        mode={'contained-tonal'} 
        textTitle="New" 
        onPressNavigation={'Default Pressed!'} 
        height={50} width={200} 
        color={Constant.Colors.LIGHT_LIME}
        borderRadius={5}/>
        <Loading size={'large'} colors={Constant.Colors.COLOR_ORANGE}/>
       
        <NumericTextInput
        value= {value}
        onChangeText={setValue}
        label = {"Enter Aadhaar Number"}
        keyboardType= {"numeric"}
        textlength= {12}
        mode={'flat'}
        textColor={'#421C25'}
        width={350}
        />
            <OTPInput length={6} onComplete={handleOtpComplete} mstyle={mstyles} 
  keyboardtype={'numeric'}/>
            
        <CheckBoxComponent color={Constant.Colors.COLOR_ORANGE} uncheckedColor={Constant.Colors.COLOR_ORANGE}/>
      </SafeAreaView>
      </PaperProvider>
    );
};

const mstyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomWidth: 3,
    borderColor: '#7E7E7E',
    width: 40,
    height: 45,
    textAlign: 'center',
    fontSize: 20,
    marginRight: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  toggleText: {
    fontSize: 16,
    color: '#7E7E7E',
  },
});