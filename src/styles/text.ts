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
  cardReportTitle: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font16,
    color: colors.white,
  },
  cardReport: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font34,
    color: colors.white,
  },
  cardTitle: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font16,
    color: colors.primary,
    lineHeight: 22,
  },
  cardContent: {
    fontFamily: family.poppinsRegular,
    fontSize: size.font10,
    color: colors.primary,
    lineHeight: 12,
  },
  cardFooter: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font8,
    color: colors.gray,
  },
  cardStatus: {
    fontFamily: family.poppinsSemiBold,
    color: colors.primary,
    fontSize: size.font12,
  },
  sectionTitle: {
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font24,
    color: colors.primary,
  },
  labelInputWhite: {
    fontFamily: family.poppinsRegular,
    fontSize: 14,
    color: colors.white,
  },
  labelInputGray: {
    fontFamily: family.poppinsRegular,
    fontSize: 14,
    color: colors.gray,
  },
  textInputWhite: {
    fontFamily: family.poppinsSemiBold,
    fontSize: 18,
    color: colors.white,
  },
  textInputPrimary: {
    fontFamily: family.poppinsSemiBold,
    fontSize: 18,
    color: colors.primary,
  },
  timeInputPrimary: {
    fontFamily: family.poppinsSemiBold,
    fontSize: 25,
    color: colors.primary,
  },
});

export default text;
