import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flexGrow: 0.55,
  },
  cardContainer: {
    width: width * 0.8,
    marginHorizontal: width * 0.2 / 2,
  },
  debitCard: {
    height: height * 0.28,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  debitCardBackground: {
    borderRadius: 10,
  },
  chipImage: {
    width: 50,
    height: 40,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bankName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBalace: {
    color: '#000',
    marginTop: 12,
    fontSize: 12,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 25,
    marginTop: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  cardHolder: {
    color: '#fff',
    fontSize: 13,
    marginBottom: -10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    color: '#000',
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  hideBalanceButton: {
    marginLeft: 10,
  },
  balanceButtonImage: {
    width: 20,
    height: 20,
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  cardOwner: {
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    margin: -15,
    backgroundColor: '#292628',
  },
});

export default styles;