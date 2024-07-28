import AsyncStorage from '@react-native-async-storage/async-storage';

const storeServerLink = async link => {
  try {
    await AsyncStorage.setItem('@server_link', link);
  } catch (e) {
    console.error('Failed to save the server link:', e);
  }
};
