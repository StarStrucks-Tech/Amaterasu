import AsyncStorage from "@react-native-async-storage/async-storage";

const getServerLink = async () => {
  try {
    const link = await AsyncStorage.getItem('@server_link');
    return link;
  } catch (e) {
    console.error('Failed to retrieve the server link:', e);
    return null;
  }
};

// Example usage in a network request
const fetchData = async () => {
  const serverLink = await getServerLink();
  if (serverLink) {
    try {
      const response = await fetch(`${serverLink}/endpoint`);
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  } else {
    console.error('No server link found.');
  }
};
