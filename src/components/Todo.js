import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Todo = ({todo, onRemove, onOpen, testID}) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      onPress={() => onOpen(todo.id)}
      onLongPress={longPressHandler}>
      <View style={styles.todo} testID={testID}>
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
    margin: 5,
  },
});
