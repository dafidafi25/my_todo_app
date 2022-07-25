import Spacer from '@components/atom/Spacer';
import WelcomePage from '@components/molecule/WelcomePage';
import ReportCards from '@components/organism/ReportCards';
import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IDashboardProps {}

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <View style={styles.container}>
      <Spacer spacing={25} />
      <WelcomePage header="Selamat Datang !" subHeader="Semoga Harimu Cerah" />

      <Spacer />
      <ReportCards />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Dashboard;
