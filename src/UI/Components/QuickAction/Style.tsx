// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  quickActionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    padding: 10,
  },
  quickActionBar: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FF00',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },

  quickActionIcon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  actionText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});