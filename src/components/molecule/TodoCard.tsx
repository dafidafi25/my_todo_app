import DotsVertical from '@assets/icons/DotsVertical';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '@themes/Colors';
import text from '@styles/text';

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
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>

      <View style={styles.text}>
        <Text style={text.cardTitle}>{title}</Text>
        {time && <Text style={text.cardContent}>{time}</Text>}
        <Text style={text.cardFooter}>{createdAt}</Text>
      </View>
      <View style={styles.optionIcon}>
        <DotsVertical color={colors.gray} width={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
    backgroundColor: colors.white,
  },
  icon: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '5%',
  },
  text: { width: '70%' },
  optionIcon: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '2%',
  },
});

export default TodoCard;
