// App.tsx
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import VisualElement from './src/UI/Screens/Frontend/VisualElementScreen';
import styles from './src/UI/Screens/Frontend/styles';


const App = () => {
  return (
    <View style={{flex:1}}>
    <SafeAreaView style={styles.container}>
      <VisualElement
        imageSource={require('./assets/imagenew.jpg')}
        lottieSource={require('./assets/AnimationLottie.json')}
        width={200}
        height={200}
        cornerRadius={20}
        rotationAngle={0} text={'this is kubair app'}      />
    </SafeAreaView>
    </View>
  );
};

export default App;
