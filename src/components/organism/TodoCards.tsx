import Github from '@assets/icons/Github';
import Spacer from '@components/atom/Spacer';
import TodoCard from '@components/molecule/TodoCard';
import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

interface ITodoCardsProps {}

const TodoCards: React.FC<ITodoCardsProps> = () => {
  const todos = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];

  return (
    <View style={styles.container}>
      <Text style={text.sectionTitle}>Tugas Hari Ini</Text>
      <FlatList
        data={todos}
        renderItem={() => (
          <View>
            <TodoCard
              title="ini judul"
              time="01"
              createdAt="ini tanggal dibuat"
              icon={<Github color={colors.primary} width={60} />}
            />
            <Spacer />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
});

export default TodoCards;
