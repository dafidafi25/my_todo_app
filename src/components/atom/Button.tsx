import colors from '@themes/Colors';
import { family, size } from '@themes/Fonts';
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Spacer from './Spacer';

type btnVariant = 'primary' | 'secondary';

type optionVariant = 'active' | 'inActive';

interface IButtonProps {
  variant?: btnVariant | optionVariant;
  text?: string;
  fullwidth?: boolean;
  onPress?: () => void;
  rounded?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  text = 'button',
  fullwidth = false,
  onPress,
  rounded = true,
}) => {
  const borderRadius = rounded ? container.rounded : container.normal;

  const width = fullwidth ? container.fullwidth : container.normal;

  let containerStyle = [
    button[variant],
    fullwidth ? container.fullwidth : container.width,
    borderRadius,
  ];

  return (
    <View style={width}>
      <Pressable onPress={() => onPress && onPress()}>
        <View style={containerStyle}>
          <Text style={buttonText[variant]}>{text}</Text>
        </View>
      </Pressable>
      <Spacer />
    </View>
  );
};

const button = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    height: 60,
  },
  secondary: {
    backgroundColor: colors.primary,
    height: 60,
    borderWidth: 1,
    borderColor: colors.white,
  },
  active: {
    backgroundColor: colors.primary,
    height: 40,
  },
  inActive: {
    backgroundColor: colors.backGround,
    height: 40,
  },
});

const container = StyleSheet.create({
  rounded: {
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normal: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullwidth: { width: '100%' },
  width: { width: 90 },
});

const buttonText = StyleSheet.create({
  primary: {
    color: colors.white,
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font22,
    lineHeight: 28,
  },
  secondary: {
    color: colors.white,
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font22,
    lineHeight: 28,
  },
  active: {
    color: colors.white,
    fontFamily: family.poppinsSemiBold,
    fontSize: size.font14,
    lineHeight: 20,
  },
  inActive: {
    color: colors.primary,
    fontFamily: family.poppinsRegular,
    fontSize: size.font14,
    lineHeight: 20,
  },
});

export default Button;
