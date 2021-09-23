import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
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

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={id => {
        setTodoId(id);
      }}
    />
  );

  if (todoId) {
    const selectTodo = todos.find(todo => todo.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectTodo} />;
  }

  return (
    <View>
      <Navbar title="Todo" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
