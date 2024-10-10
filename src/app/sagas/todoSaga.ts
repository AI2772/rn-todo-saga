import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { addLoader, addTodo, editLoader, editTodo, fetchLoader, removeLoader, removeTodo, Todo } from "../slices/todo";
import { RootState } from "../store";

// Define the shape of the action payload for adding and removing todos
interface AddTodoAction {
    type: string;
    payload: Todo;
}

interface RemoveTodoAction {
    type: string;
    payload: { id: number };
}


interface EditLoaderAction {
    type: string;
    payload: Todo;
}

function* getTodoList() {
    try {
        const res: Response = yield call(() => fetch('https://dummyjson.com/todos?limit=5'));
        const data: { todos: Todo[] } = yield res.json();
        console.log({ tood: data.todos.length })
        yield put(addTodo(data.todos || []));
    } catch (error) {
        console.log({ error });
    }
}

function* newTodo(action: AddTodoAction) {
    const state: RootState = yield select();
    const res: Response = yield call(() => fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: action.payload,
            completed: false,
            userId: 5,
        }),
    }));

    const data: Todo = yield res.json();

    yield put(addTodo({ ...data, id: state.todo.data.length + 1, }));
}

function* deleteTodo(action: RemoveTodoAction) {
    try {
        const res: Response = yield call(() => fetch('https://dummyjson.com/todos/' + action.payload, {
            method: 'DELETE',
        }));

        if (res.ok) {
            yield put(removeTodo(action.payload));
        } else {
            console.log('Failed to delete todo');
        }
    } catch (error) {
        console.log({ error });
    }
}

function* updateTodo(action: EditLoaderAction) {
    yield put(editTodo(action.payload));
}

function* todoSaga() {
    yield takeEvery(fetchLoader.type, getTodoList);
    yield takeEvery(addLoader.type, newTodo);
    yield takeLatest(removeLoader.type, deleteTodo);
    yield takeLatest(editLoader.type, updateTodo);
}

export default todoSaga;
