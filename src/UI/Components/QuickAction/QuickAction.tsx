import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AvatarCircle from '../AvatarCircle/index';
import { styles } from './Style';


/**
 * QuickAction Component
 * @description This functional component renders a list of quick action buttons.
 * Each button consists of an icon and a label.
 * The actions array defines the available actions with their respective icons and labels.
 */
const QuickAction = () => {
  const actions = [
    { name: 'Send', icon: require('../../../Assets/images/Send.png') },
    { name: 'Receive', icon: require('../../../Assets/images/Receive.png') },
    { name: 'Invoice', icon: require('.../../../Assets/images/Invoice.png') },
    { name: 'History', icon: require('../../../Assets/images/History.png') },
  ];

  return (
    <View style={styles.quickActionBar}>
      <Text style={styles.quickActionText}>Quick Actions</Text>
      <View style={styles.quickActionIcon}>
        {actions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionButton}>
            <AvatarCircle radius={30} imageSource={action.icon} />
            <Text style={styles.actionText}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickAction;