import Github from '@assets/icons/Github';
import Spacer from '@components/atom/Spacer';
import TodoCard from '@components/molecule/TodoCard';
import { useAppSelector } from '@hooks/Redux';
import { TODO_HEIGHT } from '@styles/card';
import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

interface ITodoCardsProps {}

const TodoCards: React.FC<ITodoCardsProps> = () => {
  const currentDate = new Date().toLocaleDateString();
  const todos = useAppSelector((state) => state.TodoSlice);

  const filteredTodos = todos.filter((item) => item.createdAt === currentDate);

  console.log(filteredTodos);

  const getItemLayout = (data: any, index: number) => ({
    length: TODO_HEIGHT + 20,
    offset: TODO_HEIGHT + 20 * index,
    index,
  });

  return (
    <View style={styles.container}>
      <Text style={text.sectionTitle}>Tugas Hari Ini</Text>
      <FlatList
        data={filteredTodos}
        showsVerticalScrollIndicator={false}
        getItemLayout={getItemLayout}
        keyExtractor={(item) => item.id}
        renderItem={RenderItem}
      />
    </View>
  );
};

const RenderItem = () => {
  return (
    <View>
      <TodoCard
        title="ini judul"
        time="01"
        createdAt="ini tanggal dibuat"
        icon={<Github color={colors.primary} width={50} />}
      />
      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
});

export default TodoCards;
