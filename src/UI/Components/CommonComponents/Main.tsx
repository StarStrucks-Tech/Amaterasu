
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './Loading';
import TextButton from './TextButton';
import Constant from '../../../UI-Constants/Constant.json';
export default function Main() {
    return (
        <PaperProvider> 
        <SafeAreaView>
        <TextButton textTitle="New" onPressNavigation={'Default Pressed!'} height={100} width={200} color='green'/>
        <Loading size={'large'} colors={Constant.Colors.COLOR_ORANGE}/>
      </SafeAreaView>
      </PaperProvider>
    );
};