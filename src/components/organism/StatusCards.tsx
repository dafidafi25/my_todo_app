import Github from '@assets/icons/Github';
import Spacer from '@components/atom/Spacer';
import StatusCard from '@components/molecule/StatusCard';
import text from '@styles/text';
import colors from '@themes/Colors';
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

interface IStatusCardsProps {}

const StatusCards: React.FC<IStatusCardsProps> = () => {
  let todosObject: string[] = [];

  const todoByCreated: ITodoList = todos.reduce((prev, todo) => {
    let temp: ITodoList = prev;
    const key = todo.createdAt;

    if (key in prev) {
      temp[key].push(todo);
    } else {
      todosObject.push(key);
      temp[key] = [todo];
    }
    return prev;
  }, {});

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todosObject}
        renderItem={({ item, index }) => (
          <View key={index}>
            <View style={styles.section}>
              <Text style={text.cardTitle}>{item}</Text>
            </View>
            <Spacer />
            {todoByCreated[item].map((todo) => {
              return (
                <View key={todo.id}>
                  <StatusCard
                    title={todo.title}
                    icon={<Github color={colors.primary} width={40} />}
                  />
                  <Spacer spacing={10} />
                </View>
              );
            })}
            <Spacer spacing={20} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: { borderBottomWidth: 1, borderBottomColor: colors.primary },
});

export default StatusCards;

interface ITodoList {
  [key: string]: ITodo[];
}

interface ITodo {
  id: number;
  title: string;
  status: 'active' | 'miss' | 'done';
  createdAt: string;
}

const todos: ITodo[] = [
  {
    id: 1,
    title: 'Belajar React Native',
    status: 'active',
    createdAt: 'Juli 2021',
  },
  {
    id: 2,
    title: 'Belajar React Native',
    status: 'active',
    createdAt: 'Juli 2021',
  },
  {
    id: 3,
    title: 'Belajar React Native',
    status: 'active',
    createdAt: 'Agustus 2021',
  },
  {
    id: 4,
    title: 'Belajar React Native',
    status: 'active',
    createdAt: 'Agustus 2021',
  },
  {
    id: 5,
    title: 'Belajar React Native',
    status: 'active',
    createdAt: 'Agustus 2021',
  },
  {
    id: 6,
    title: 'Belajar React Native',
    status: 'active',
    createdAt: 'Agustus 2021',
  },
];
