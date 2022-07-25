import ReportCard from '@components/molecule/ReportCard';
import text from '@styles/text';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IReportCardsProps {}

const ReportCards: React.FC<IReportCardsProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.reportTitle}>
        <Text style={text.sectionTitle}>Laporan</Text>
      </View>

      <View style={styles.reportCard}>
        <ReportCard
          report="Daily"
          progressPercent="20 %"
          progressTask="32 / 84"
        />
        <ReportCard
          report="Daily"
          progressPercent="20 %"
          progressTask="32 / 84"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'column' },
  reportCard: { flexDirection: 'row', justifyContent: 'space-around' },
  reportTitle: { alignSelf: 'center' },
});

export default ReportCards;
