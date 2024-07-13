import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {TRANSACTION_TYPES, STATUS_COLORS} from './constants';
import styles from './styles.ts';
import {TransactionItemProps} from './type.ts';
/**
 * TransactionItem Component
 * Renders details of a single transaction.
 *
 * @param {TransactionItemProps} props - Transaction details.
 */
const TransactionItem = ({
  type,
  recipient,
  amount,
  date,
  time,
  status,
}: TransactionItemProps) => {
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'failed':
        return STATUS_COLORS.FAILED;
      case 'succeed':
        return STATUS_COLORS.SUCCEED;
      default:
        return STATUS_COLORS.DEFAULT;
    }
  };

  const getArrowIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'payment to':
      case 'paid to':
        return 'arrow-up-right';
      case 'received from':
        return 'arrow-down-left';
      default:
        return 'arrow-down-left';
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon
              name={getArrowIcon(type)}
              size={32}
              style={styles.arrowIcon}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.typeText}>
              {type} {type === TRANSACTION_TYPES.PAYMENT_TO && '⚡'}
            </Text>
            <Text style={styles.recipientText}>{recipient}</Text>
          </View>
          <Text style={styles.amountText}>₹{amount}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dateTimeText}>{`${date} - ${time}`}</Text>
          <View
            style={[
              styles.statusIndicator,
              {backgroundColor: getStatusColor(status)},
            ]}>
            <Text style={styles.statusText}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;
