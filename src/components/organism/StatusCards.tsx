import Github from '@assets/icons/Github';
import Spacer from '@components/atom/Spacer';
import StatusCard from '@components/molecule/StatusCard';
import { useAppSelector } from '@hooks/Redux';
import { ITodoState } from '@stores/features/TodoSlice';
import text from '@styles/text';
import colors from '@themes/Colors';
import { MONTH } from 'constant/date';
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

interface IStatusCardsProps {}

const StatusCards: React.FC<IStatusCardsProps> = () => {
  let todosObject: string[] = [];
  const todos = useAppSelector((state) => state.TodoSlice);

  const todoByCreated: ITodoList = todos.reduce((prev, todo) => {
    let temp: ITodoList = prev;
    const key: string = todo.createdAt;

    const date = key.split('/');

    const generateObject: string = `${MONTH[parseInt(date[0], 10) - 1]} 20${
      date[2]
    }`;

    if (generateObject in prev) {
      temp[generateObject].push(todo);
    } else {
      todosObject.push(generateObject);
      temp[generateObject] = [todo];
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
                    title={todo.judul}
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
  [key: string]: ITodoState[];
}
