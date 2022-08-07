import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import colors from '@themes/Colors';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface ITrainingDateInputProps {
  label: string;
}

const TrainingDateInput: React.FC<ITrainingDateInputProps> = ({ label }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);

  let day: string = date.getDate().toString();
  let month: string = MONTH[date.getMonth()];
  let year: string = date.getFullYear().toString();

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
        date={date}
        onConfirm={(data) => {
          setDate(data);
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

const MONTH: string[] = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];
