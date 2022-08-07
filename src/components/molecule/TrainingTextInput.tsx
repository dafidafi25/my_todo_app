import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

interface ITrainingTextInputProps {
  label: string;
}

const TrainingTextInput: React.FC<ITrainingTextInputProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={text.labelInputWhite}>{label}</Text>
      <Spacer spacing={5} />
      <TextInput style={[styles.input, text.textInputWhite]} textAlign="left" />
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
