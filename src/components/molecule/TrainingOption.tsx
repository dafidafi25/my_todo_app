import Button from '@components/atom/Button';
import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface IOption {
  text: string;
  value: string | number;
}

interface ITrainingOptionProps {
  label: string;
  options: IOption[];
  selected?: string | number;
  onChange?: (newValue: string | number) => void;
}

const TrainingOption: React.FC<ITrainingOptionProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  const initialIndex = options.findIndex((item) => item.value === selected);
  const selectedOptions = options[initialIndex >= 0 ? initialIndex : 0].value;

  // const handleOptionChange = (value: string | number) => {
  //   const optionIndex = options.findIndex((item) => item.value === value);
  //   setSelectedOptions(optionIndex);
  // };

  return (
    <View style={styles.container}>
      <Text style={text.labelInputGray}>{label}</Text>
      <Spacer spacing={12} />
      <View style={styles.option}>
        {options.map((item) => {
          return (
            <Button
              key={item.value}
              variant={selectedOptions === item.value ? 'active' : 'inActive'}
              onPress={() => onChange && onChange(item.value)}
              text={item.text}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  option: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TrainingOption;
