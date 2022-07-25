import colors from '@themes/Colors';
import { family, size } from '@themes/Fonts';
import { StyleSheet } from 'react-native';

const text = StyleSheet.create({
  header: {
    fontFamily: family.poppinsBold,
    fontSize: size.font30,
    color: colors.primary,
    lineHeight: 34,
  },
  subHeader: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font16,
    color: colors.gray,
    lineHeight: 18,
  },

  cardTitle: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font16,
    color: colors.white,
  },
  cardReport: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font34,
    color: colors.white,
  },
  sectionTitle: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font24,
    color: colors.primary,
  },
});

export default text;
