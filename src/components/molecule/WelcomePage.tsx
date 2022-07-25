import text from '@styles/text';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IWelcomePageProps {
  header: string;
  subHeader: string;
}

const WelcomePage: React.FC<IWelcomePageProps> = ({ header, subHeader }) => {
  return (
    <View style={styles.container}>
      <Text style={text.header}>{header}</Text>
      <Text style={text.subHeader}>{subHeader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default WelcomePage;
