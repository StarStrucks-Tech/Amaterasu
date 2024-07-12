// styles.ts
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F5F5DC',
    borderRadius: 8,
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  typeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipientText: {
    fontSize: 14,
  },
  dateTimeText: {
    fontSize: 12,
    color: '#666',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
});
