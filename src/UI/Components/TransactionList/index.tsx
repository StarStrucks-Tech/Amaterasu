// index.tsx
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {TRANSACTION_TYPES, STATUS_COLORS} from './constants';

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
        return require('../../../Assets/images/up_arrow.png');
      case 'paid to':
        return require('../../../Assets/images/up_arrow.png');
      case 'received from':
        return require('../../../Assets/images/down_arrow.png');
      default:
        return require('../../../Assets/images/down_arrow.png');
    }
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Image source={getArrowIcon(type)} style={styles.arrowIcon} />
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

const TransactionList = ({transactions}: TransactionListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        renderItem={({item}) => <TransactionItem {...item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TransactionList;

type TransactionItemProps = {
  type: string;
  recipient: string;
  amount: string;
  date: string;
  time: string;
  status: string;
};

type TransactionListProps = {
  transactions: TransactionItemProps[];
};
