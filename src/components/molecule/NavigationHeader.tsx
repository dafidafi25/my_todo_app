import ArrowLeft from '@assets/icons/ArrowLeft';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '@themes/Colors';
import text from '@styles/text';
import Spacer from '@components/atom/Spacer';

interface INavigationHeaderProps {}

const NavigationHeader: React.FC<INavigationHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <View style={styles.textContainer}>
        <Text style={text.sectionTitle}>Task List</Text>
      </View>
      <View style={styles.iconContainer}>
        <ArrowLeft color={colors.primary} width={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textContainer: { alignSelf: 'center' },
  iconContainer: { position: 'absolute', top: 18, right: 0 },
});

export default NavigationHeader;
