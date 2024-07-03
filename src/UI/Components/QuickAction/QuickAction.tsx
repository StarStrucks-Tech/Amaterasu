// QuickActionBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AvatarCircle from '../AvatarCircle/index';
import { styles } from './Style';

const QuickAction: React.FC = () => {
  const actions = [
    { name: 'Send', icon: require('../../../Assets/images/Send.png') },
    { name: 'Receive', icon: require('../../../Assets/images/Receive.png') },
    { name: 'Invoice', icon: require('.../../../Assets/images/invoice.png') },
    { name: 'History', icon: require('../../../Assets/images/History.png') },
  ];

  return (
    <View style={styles.quickActionBar}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionButton}>
          <AvatarCircle radius={30} imageSource={action.icon} />
          <Text style={styles.actionText}>{action.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuickAction;