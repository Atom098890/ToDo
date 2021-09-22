import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Todo = ({todo, onRemove}) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      onPress={() => console.log('Press', todo.id)}
      onLongPress={longPressHandler}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
  },
});
