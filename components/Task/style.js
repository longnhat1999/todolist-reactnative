import { StyleSheet } from 'react-native';
import color from './../../contains/color'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: color.white,
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
    backgroundColor: color.second,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 16,
    fontWeight: '700',
    color: color.white,
  },
  content: {
    width: '80%',
    fontSize: 16,
  }
})

export default styles;
