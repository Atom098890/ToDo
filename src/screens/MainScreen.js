import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

export const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => {
          return <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});