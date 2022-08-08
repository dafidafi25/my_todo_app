import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrainingTimeInput from './TrainingTimeInput';

interface ITimeFormProps {
  onChangeStart?: (newDate: number) => void;
  onChangeEnd?: (newDate: number) => void;
}

const TimeForm: React.FC<ITimeFormProps> = ({ onChangeEnd, onChangeStart }) => {
  return (
    <View style={styles.container}>
      <TrainingTimeInput label="Mulai" onChangeTime={onChangeStart} />
      <TrainingTimeInput label="Selesai" onChangeTime={onChangeEnd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimeForm;
