import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './styles';

type DebitCardProps = {
  item: {
    bankName: string;
    balance: string;
    cardNumber: string;
    cardHolder: string;
  };
};

const DebitCard = ({ item }: DebitCardProps) => {
  const [balanceHidden, setBalanceHidden] = useState(true);

  return (
    <ImageBackground
      source={require('../../../assets/card-background.png')}
      style={styles.debitCard}
      imageStyle={styles.debitCardBackground}
    >
      <Image source={require('../../../assets/card_chip.png')} style={styles.chipImage} />
      <Text style={styles.bankName}>{item.bankName}</Text>
      <Text style={styles.cardBalace}>Card Balance</Text>
      <View style={styles.balanceContainer}>
        <Text style={styles.balance}>
          {balanceHidden ? '****' : item.balance}
        </Text>
        <Text style={styles.separator}>|</Text>
        <TouchableOpacity
          onPress={() => setBalanceHidden(!balanceHidden)}
          style={styles.hideBalanceButton}
        >
          <Image
            source={balanceHidden ? require('../../../assets/show.png') : require('../../../assets/hide.png')}
            style={styles.balanceButtonImage}
          />
        </TouchableOpacity>
      </View>
      <View 

        style={styles.cardOwner}
        >
          <Text style={styles.cardHolder}>{item.cardHolder}</Text>
          <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      </View>
    </ImageBackground>
  );
};

export default DebitCard;