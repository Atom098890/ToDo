const SELECTORS = {
  addTodo: 'add-todo',
  todoItem: 'todo-item',
  inputTodo: 'input-todo',
};

export const AddedTodo = async () => {
  await element(by.id(SELECTORS.inputTodo)).replaceText('Купить хлеб');
  await element(by.id(SELECTORS.addTodo)).tap();
  await expect(element(by.id(SELECTORS.todoItem))).toBeVisible();
};

export const DeletedTodo = async () => {
  await element(by.id(SELECTORS.todoItem)).atIndex(0).longPress();
  await expect(element(by.id(SELECTORS.todoItem)).atIndex(0)).toBeNotVisible();
};
