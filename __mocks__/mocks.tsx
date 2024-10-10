jest.mock('../src/service', () => ({
    addTodoAPI: jest.fn(),
    deleteTodoAPI: jest.fn(),
    getTodoAPI: jest.fn(),
}));