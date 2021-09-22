import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {AddTodo} from './src/AddTodo';
import {Navbar} from './src/Navbar';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };
    setTodos(predTodos => {
      return [...predTodos, newTodo];
    });
  };

  const removeTodo = id => {
    setTodos(pred =>
      pred.filter(todo => {
        return todo.id !== id;
      }),
    );
  };

  return (
    <View>
      <Navbar title="Todo" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => {
            return <Todo todo={item} onRemove={removeTodo} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
