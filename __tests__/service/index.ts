import { addTodoAPI, deleteTodoAPI, getTodoAPI } from "../../src/service";


describe('API', () => {
    it('should return an array of todos', async () => {
        const response = await getTodoAPI();
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
        const data = await response.json();
        expect(Array.isArray(data.todos)).toBe(true);
    });

    it('should delete a todo', async () => {
        const id = 1;
        const response = await deleteTodoAPI(id);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(200);
    });

    it('should add a new todo', async () => {
        const todo = 'New Todo';
        const response = await addTodoAPI(todo);
        expect(response.ok).toBe(true);
        expect(response.status).toBe(201);
    });
})