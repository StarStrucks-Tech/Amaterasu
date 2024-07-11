import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

/**
 * Props for the TimerDisplay component.
 */
type TimerDisplayProps = {
  seconds: number;
};

/**
 * TimerDisplay Component
 * This component takes a number of seconds as input and displays it in a MM:SS format.
 * It pads single-digit minutes and seconds with a leading zero.
 */
const TimerDisplay = ({seconds}: TimerDisplayProps) => {
  const formattedSeconds =
    seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <View>
      <Text style={styles.timerText}>
        {formattedMinutes}:{formattedSeconds}
      </Text>
    </View>
  );
};

export default TimerDisplay;
