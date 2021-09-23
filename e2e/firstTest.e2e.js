import {AddedTodo, DeletedTodo} from './screens/MainScreenTodo';

describe('Main screen', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('Add Todo', async () => {
    await AddedTodo();
  });

  it('Delete todo', async () => {
    await DeletedTodo();
  });
});
