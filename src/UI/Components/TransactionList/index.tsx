import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import TransactionItem from '../TransactionItem';
import {TransactionItemProps} from './type.ts';

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

/**
 * Types for transaction list props.
 */
type TransactionListProps = {
  transactions: TransactionItemProps[];
};
