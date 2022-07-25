import Spacer from '@components/atom/Spacer';
import WelcomePage from '@components/molecule/WelcomePage';
import ReportCards from '@components/organism/ReportCards';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodoCards from '@components/organism/TodoCards';
import colors from '@themes/Colors';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <View style={styles.container}>
      <Spacer spacing={25} />
      <WelcomePage header="Selamat Datang !" subHeader="Semoga Harimu Cerah" />
      <Spacer />
      <ReportCards />
      <Spacer />
      <TodoCards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.backGround },
});

export default Dashboard;
