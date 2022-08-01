import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '@themes/Colors';
import text from '@styles/text';
import CircleStatus from '@assets/icons/CircleStatus';
import card from '@styles/card';

interface IStatusCardProps {
  title: string;
  icon: JSX.Element;
}

const StatusCard: React.FC<IStatusCardProps> = ({ title, icon }) => {
  return (
    <View style={card.todoCard}>
      <View style={styles.icon}>{icon}</View>

      <View style={styles.text}>
        <Text style={text.cardTitle}>{title}</Text>
      </View>
      <View style={styles.statusContainer}>
        <View style={styles.iconStatus}>
          <CircleStatus color={colors.success} width={8} />
        </View>
        <Text style={[text.cardStatus, styles.textStatus]}>Aktif</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '2.5%',
  },
  text: { width: '60%', alignSelf: 'center' },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStatus: { top: 9, paddingRight: 8 },
  textStatus: { alignSelf: 'center', top: 2 },
});

export default StatusCard;