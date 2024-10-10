import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { addLoader } from '../app/slices/todo';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (todoText.trim()) {
            if (todoText) {
                dispatch(addLoader(todoText))
            }
            setTodoText('');
        }
    };

    return (
        <View style={tw`bg-white p-4 rounded-lg shadow-md`}>
            <TextInput
                style={tw`border border-gray-300 rounded-md px-3 py-2 mb-4 text-base`}
                placeholder="Enter your todo"
                value={todoText}
                onChangeText={setTodoText}
            />
            <TouchableOpacity
                style={tw`bg-blue-500 rounded-md py-2 px-4`}
                onPress={handleSubmit}
            >
                <Text style={tw`text-white text-center font-semibold text-xl`}>
                    Add Todo
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoForm;