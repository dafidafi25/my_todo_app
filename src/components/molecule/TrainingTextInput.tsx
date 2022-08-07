import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, TextInput, Text, Platform } from 'react-native';

interface ITrainingTextInputProps {
  label: string;
}

const TrainingTextInput: React.FC<ITrainingTextInputProps> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={text.labelInputWhite}>{label}</Text>
      {Platform.OS === 'ios' && <Spacer spacing={10} />}
      <TextInput style={[styles.input]} textAlign="left" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
});

export default TrainingTextInput;
