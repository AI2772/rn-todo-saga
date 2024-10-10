import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import { fetchLoader } from '../app/slices/todo';


const TodoScreen: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchLoader())
    })
    return (
        <View style={tw`flex-1 p-4`}>
            <Text style={tw`text-2xl font-bold mb-4`}>Todo List</Text>
            <TodoForm />
            <TodoList />
        </View>
    );
};

export default TodoScreen;