import colors from '@themes/Colors';
import { StyleSheet } from 'react-native';

const TODO_HEIGHT = 65;

const card = StyleSheet.create({
  todoCard: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    borderWidth: 2,
    borderColor: colors.gray,
    elevation: 2,
    backgroundColor: colors.white,
    height: TODO_HEIGHT,
  },
});

export { TODO_HEIGHT };

export default card;
