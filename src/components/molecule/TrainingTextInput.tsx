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
}

const TrainingTextInput: React.FC<ITrainingTextInputProps> = ({
  label,
  onBlur,
  onChangeText,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={text.labelInputWhite}>{label}</Text>
      <Spacer spacing={5} />
      <TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        style={[styles.input, text.textInputWhite]}
        textAlign="left"
        value={value}
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
});

export default TrainingTextInput;
