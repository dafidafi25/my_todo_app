import Magnify from '@assets/icons/Magnify';
import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '@themes/Colors';

interface ISearchBarProps {}

const SearchBar: React.FC<ISearchBarProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.icon}>
        <Magnify color={colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: colors.white,
  },
  input: { color: colors.primary, width: '90%', paddingLeft: 10 },
  icon: { width: '10%' },
});

export default SearchBar;
