import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList: React.FC = () => {
    const { isLoading, data: todos } = useSelector((state: any) => state.todo)

    return (
        <FlatList
            data={todos}
            extraData={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <TodoItem todo={item} />}
        />
    );
};

export default TodoList;
