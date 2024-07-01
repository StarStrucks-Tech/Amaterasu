// TimerDisplay.tsx

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TimerDisplayProps {
  seconds: number; // Define seconds prop as number type
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({seconds}) => {
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
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

const styles = StyleSheet.create({
  timerText: {
    alignContent: 'center',
    textAlign: 'center',
    color: '#7E7E7E',
    fontFamily: 'Open Sans',
    top: -391,
    fontSize: 12,
  },
});

export default TimerDisplay;
