
export const deleteTodoAPI = async (id: string | number) => fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE',
});

export const addTodoAPI = (todo: string) => fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        todo,
        completed: false,
        userId: 5,
    }),
})

export const getTodoAPI = (limit = 5) => fetch('https://dummyjson.com/todos?limit=' + limit)
