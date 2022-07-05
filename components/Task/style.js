import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#53d6f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  content: {
    width: '80%',
    fontSize: 16,
  }
})

export default styles;
