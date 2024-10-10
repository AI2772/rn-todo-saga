import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
    id: number;
    todo: string;
    completed?: boolean;
    userId?: number;
}

interface TodoState {
    data: Todo[];
    isLoading: boolean;
}

const initialState: TodoState = {
    data: [],
    isLoading: false,
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo | Todo[]>) => {
            if (Array.isArray(action.payload)) {
                state.data = action.payload;
            } else if (action.payload) {
                state.data.unshift(action.payload);
            }
            state.isLoading = false;
        },
        removeTodo: (state, action: PayloadAction<string | number>) => {
            const idx = state.data.findIndex((el) => el.id === action.payload);
            if (idx > -1) {
                state.data.splice(idx, 1);
            }
        },
        editTodo: (state, action: PayloadAction<Todo>) => {
            const idx = state.data.findIndex((el) => el.id === action.payload.id);
            if (idx > -1) {
                state.data[idx] = action.payload;
            }
        },
        fetchLoader: (state) => {
            state.isLoading = true;
        },
        editLoader: (state) => {
            state.isLoading = true;
        },
        addLoader: (state, action: PayloadAction<string>) => {
            state.isLoading = true;
        },
        removeLoader: (state, action: PayloadAction<string | number>) => {
            state.isLoading = true;
        },
    },
});

export const { addTodo, removeTodo, editTodo, fetchLoader, editLoader, addLoader, removeLoader } = todoSlice.actions;

export default todoSlice.reducer;
