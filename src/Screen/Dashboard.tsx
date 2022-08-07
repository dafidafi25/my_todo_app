import Spacer from '@components/atom/Spacer';
import WelcomePage from '@components/molecule/WelcomePage';
import ReportCards from '@components/organism/ReportCards';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TodoCards from '@components/organism/TodoCards';
import colors from '@themes/Colors';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.backGround} />
      <SafeAreaView style={styles.screen}>
        <Spacer spacing={10} />
        <WelcomePage
          header="Selamat Datang !"
          subHeader="Semoga Harimu Cerah"
        />
        <Spacer />
        <ReportCards />
        <Spacer />
        <TodoCards />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGround,
    paddingHorizontal: 15,
  },
  screen: { flex: 1 },
});

export default Dashboard;
