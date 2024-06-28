export const fetchData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    console.warn(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
