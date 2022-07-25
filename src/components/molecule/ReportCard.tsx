import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type reportType = 'Daily' | 'Monthly';

interface IReportCardProps {
  report: reportType;
  progressPercent: string;
  progressTask: string;
}

const ReportCard: React.FC<IReportCardProps> = ({
  report,
  progressPercent,
  progressTask,
}) => {
  return (
    <View style={styles.container}>
      <Text style={text.cardTitle}>{report}</Text>
      <Text style={text.cardReport}>{progressPercent}</Text>
      <Text style={text.cardTitle}>{progressTask}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
});

export default ReportCard;
