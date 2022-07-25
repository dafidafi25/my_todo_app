/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import AccountMultiple from '@assets/icons/AccountMultiple';
import text from '@styles/text';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import colors from '@themes/Colors';

const App = () => {
  return (
    <SafeAreaView>
      <AccountMultiple color={colors.primary} width={50} />
      <Text style={text.header}>Selamat Datang !</Text>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

export default App;
