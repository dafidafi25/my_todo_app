import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import { size } from '@themes/Fonts';
import React from 'react';
import { View, StyleSheet, TextInput, Text, Platform } from 'react-native';

interface ITextAreaInputProps {
  label: string;
}

const TextAreaInput: React.FC<ITextAreaInputProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={text.labelInputGray}>{label}</Text>
      {Platform.OS === 'ios' && <Spacer spacing={10} />}
      <TextInput
        style={[text.textInputPrimary, styles.input]}
        textAlign="left"
        multiline
        textAlignVertical="bottom"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    minHeight: 80,
    fontSize: size.font14,
    padding: 0,
  },
});

export default TextAreaInput;
