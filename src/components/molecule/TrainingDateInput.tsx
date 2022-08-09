import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import { MONTH } from 'constant/date';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface ITrainingDateInputProps {
  label: string;
  onChangeDate?: (newDate: Date) => void;
  value?: Date;
}

const TrainingDateInput: React.FC<ITrainingDateInputProps> = ({
  label,
  onChangeDate,
  value = new Date(),
}) => {
  const [open, setOpen] = useState(false);

  let day: string = value.getDate().toString();
  let month: string = MONTH[value.getMonth()];
  let year: string = value.getFullYear().toString();

  day = day.length > 1 ? day : `0${day}`;

  const formatDate: string = `${month} ${day}, ${year}`;

  const handleModal = () => {
    setOpen(true);
  };

  return (
    <View style={styles.container}>
      <Text style={text.labelInputWhite}>{label}</Text>
      <Pressable onPress={handleModal}>
        <Spacer spacing={10} />
        <Text style={[text.textInputWhite, styles.text]}>{formatDate}</Text>
      </Pressable>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={(data) => {
          onChangeDate && onChangeDate(data);
          setOpen(false);
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
  container: { borderBottomWidth: 1, borderColor: colors.white },
  text: {},
});

export default TrainingDateInput;
