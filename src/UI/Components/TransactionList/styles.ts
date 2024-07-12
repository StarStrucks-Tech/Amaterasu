// styles.ts
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFDF6',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: '#f0f0d7',
    marginVertical: 5,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  arrowIcon: {
    width: 36,
    height: 36,
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#26273a',
  },
  recipientText: {
    fontSize: 14,
    color: '#26273a',
  },

  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dateTimeText: {
    fontSize: 12,
    color: 'gray',
  },
  statusIndicator: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
  },
});
