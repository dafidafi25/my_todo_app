import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

interface ITrainingTextInputProps {
  label: string;
  onBlur?: () => void;
  onChangeText?: (newText: string) => void;
  value?: string;
  fullwidth?: boolean;
  type?: 'text' | 'password';
}

const TrainingTextInput: React.FC<ITrainingTextInputProps> = ({
  label,
  onBlur,
  onChangeText,
  value,
  fullwidth = false,
  type = 'text',
}) => {
  const widthVariant = fullwidth ? styles.fullwidth : {};

  return (
    <View style={[styles.container, widthVariant]}>
      <Text style={text.labelInputWhite}>{label}</Text>
      <Spacer spacing={5} />
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        style={[styles.input, text.textInputWhite]}
        textAlign="left"
        value={value}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    padding: 0,
  },
  fullwidth: { width: '100%' },
});

export default TrainingTextInput;
