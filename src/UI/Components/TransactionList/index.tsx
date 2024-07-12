// index.tsx
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import {STATUS_COLORS, TRANSACTION_ICONS} from './constants';

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
      case 'pending':
        return STATUS_COLORS.PENDING;
      default:
        return STATUS_COLORS.DEFAULT;
    }
  };

  const getTypeIcon = (type: string): string => {
    switch (type.toLowerCase()) {
      case 'payment to':
      case 'paid to':
        return TRANSACTION_ICONS.PAYMENT_TO;
      case 'received from':
        return TRANSACTION_ICONS.RECEIVED_FROM;
      default:
        return TRANSACTION_ICONS.DEFAULT;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={getTypeIcon(type)} size={24} color="#000" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.typeText}>{type}</Text>
        <Text style={styles.recipientText}>{recipient}</Text>
        <Text style={styles.dateTimeText}>{`${date} - ${time}`}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{amount}</Text>
        <Text style={[styles.statusText, {color: getStatusColor(status)}]}>
          {status}
        </Text>
      </View>
    </View>
  );
};

const TransactionList = ({transactions}: TransactionListProps) => {
  return (
    <>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </>
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
