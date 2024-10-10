import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { addLoader, addTodo, editLoader, editTodo, fetchLoader, removeLoader, removeTodo, Todo } from "../slices/todo";
import { RootState } from "../store";
import { addTodoAPI, deleteTodoAPI, getTodoAPI } from "../../service";

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

export function* getTodoList() {
    try {
        const res: Response = yield call(getTodoAPI);
        const data: { todos: Todo[] } = yield res.json();

        yield put(addTodo(data.todos || []));
    } catch (error) {
        console.log({ error });
    }
}

export function* newTodo(action: AddTodoAction) {
    const state: RootState = yield select();
    // @ts-ignore
    const res: Response = yield call(addTodoAPI, action.payload);

    const data: Todo = yield res.json();

    yield put(addTodo({ ...data, id: state.todo.data.length + 1, }));
}

export function* deleteTodo(action: RemoveTodoAction) {
    try {
        // @ts-ignore
        const res: Response = yield call(deleteTodoAPI, action.payload);

        if (res.ok) {
            // @ts-ignore
            yield put(removeTodo(action.payload));
        } else {
            console.log('Failed to delete todo');
        }
    } catch (error) {
        console.log({ error });
    }
}

export function* updateTodo(action: EditLoaderAction) {
    yield put(editTodo(action.payload));
}

export function* todoSaga() {
    yield takeEvery(fetchLoader.type, getTodoList);
    yield takeEvery(addLoader.type, newTodo);
    yield takeLatest(removeLoader.type, deleteTodo);
    yield takeLatest(editLoader.type, updateTodo);
}

export default todoSaga;
