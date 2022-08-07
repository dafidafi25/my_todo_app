import Button from '@components/atom/Button';
import Spacer from '@components/atom/Spacer';
import text from '@styles/text';
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface IOption {
  text: string;
  value: string | number;
}

interface ITrainingOptionProps {
  label: string;
  options: IOption[];
}

const TrainingOption: React.FC<ITrainingOptionProps> = ({ label, options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string | number>(
    options[0].value,
  );

  const handleOptionChange = (value?: number | string) => {
    console.log(`Option Changed to ${value}`);
    value && setSelectedOptions(value);
  };

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
              handlePress={handleOptionChange}
              id={item.value}
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
