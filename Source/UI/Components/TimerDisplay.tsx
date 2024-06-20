import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TimerDisplaystyle from "./Styles/TimerDisplaystyle";

const TimerDisplay = ({ seconds, isActive }) => {
  const navigation = useNavigation();
  const [remainingSeconds, setRemainingSeconds] = useState(seconds); // State to hold remaining seconds
  const [isActiveTimer, setIsActiveTimer] = useState(true); // State to control timer activation
  const [intervalId, setIntervalId] = useState(null); // State to hold interval ID

  const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  const minutes = Math.floor(remainingSeconds / 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Start or stop the timer based on isActive prop
  useEffect(() => {
    if (isActive) {
      const id = setInterval(() => {
        if (remainingSeconds > 0) {
          setRemainingSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
  
      setIntervalId(id);
  
      return () => {
        clearInterval(intervalId); // Clear interval on unmount
      };
    } else {
      clearInterval(intervalId); // Clear interval immediately if isActive is false
    }
  }, [isActive, remainingSeconds]);

  // Navigate when seconds reach 0
  useEffect(() => {
    if (remainingSeconds === 0) {
      clearInterval(intervalId); // Clear interval when navigating away
      if (isActive && isActiveTimer) { // Ensure isActiveTimer check to navigate only if timer is active
        navigation.navigate('AdhaarConsent'); // Replace 'AdharConsent' with your screen name
      }
    }
  }, [remainingSeconds, isActive, isActiveTimer, navigation, intervalId]);

  // Handle navigation events to pause timer
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setIsActiveTimer(false); // Pause the timer when navigating away from the screen
    });

    const backHandler = navigation.addListener('beforeRemove', (e) => {
      // Prevent timer reset if navigating back to 'AdharConsent'
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault(); // Prevent the default action
        setIsActiveTimer(false); // Pause the timer
        navigation.navigate('AdhaarConsent'); // Navigate back to 'AdharConsent' screen
      }
    });

    return () => {
      unsubscribe();
      backHandler();
    };
  }, [navigation]);

  return (
    <View>
      <Text style={TimerDisplaystyle.timerText}>{formattedMinutes}:{formattedSeconds}</Text>
    </View>
  );
};

export default TimerDisplay;
