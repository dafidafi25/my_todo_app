import DotsVertical from '@assets/icons/DotsVertical';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '@themes/Colors';
import text from '@styles/text';
import card from '@styles/card';

interface ITodoCardProps {
  title: string;
  time?: string;
  createdAt: string;
  icon: JSX.Element;
}

const TodoCard: React.FC<ITodoCardProps> = ({
  title,
  time,
  createdAt,
  icon,
}) => {
  return (
    <View style={card.todoCard}>
      <View style={styles.icon}>{icon}</View>

      <View style={styles.text}>
        <Text style={text.cardTitle}>{title}</Text>
        {time && <Text style={text.cardContent}>{time}</Text>}
        <Text style={text.cardFooter}>{createdAt}</Text>
      </View>
      <View style={styles.optionIcon}>
        <DotsVertical color={colors.gray} width={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '4%',
  },
  text: { width: '70%', justifyContent: 'center' },
  optionIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '0.5%',
  },
});

export default TodoCard;
