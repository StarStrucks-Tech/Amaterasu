import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Style';

/**
 * Index Component
 * @description This functional component renders a list of quick action buttons.
 * Each button consists of an icon and a label.
 * The actions array defines the available actions with their respective icons and labels.
 */
const Index = () => {
    const actions = [
        { name: 'Send', icon: 'arrow-outward' },
        { name: 'Receive', icon: 'call-received' },
        { name: 'Invoice', icon: 'receipt' },
        { name: 'History', icon: 'history' },
    ];

    return (
        <View style={styles.quickActionBar}>
            <Text style={styles.quickActionText}>Quick Actions</Text>
            <View style={styles.quickActionIcon}>
                {actions.map((action, index) => (
                    <TouchableOpacity key={index} style={styles.actionButton}>
                        <View style={styles.iconContainer}>
                            <Icon name={action.icon} size={30} color="#000" />
                        </View>
                        <Text style={styles.actionText}>{action.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default Index;