import colors from '@themes/Colors';
import { family, size } from '@themes/Fonts';
import { StyleSheet } from 'react-native';

const text = StyleSheet.create({
  header: {
    fontFamily: family.poppinsBold,
    fontSize: size.font30,
    color: colors.primary,
  },
  subHeader: {
    fontFamily: family.poppinsBold,
    fontSize: size.font30,
    color: colors.gray,
  },
});

export default text;
