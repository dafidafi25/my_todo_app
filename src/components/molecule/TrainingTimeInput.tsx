import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface ITrainingTimeInputProps {
  label: string;
}

const TrainingTimeInput: React.FC<ITrainingTimeInputProps> = ({ label }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(true);
  };

  return (
    <View style={styles.container}>
      <Text style={text.labelInputGray}>{label}</Text>
      <Pressable onPress={handleModal}>
        <Spacer spacing={10} />
        <Text style={[text.timeInputPrimary, styles.text]}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </Pressable>

      <DatePicker
        modal
        locale="fr"
        mode="time"
        open={open}
        date={date}
        onConfirm={(data) => {
          setDate(data);
          setOpen(false);
          console.log(data);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        textColor={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default TrainingTimeInput;
