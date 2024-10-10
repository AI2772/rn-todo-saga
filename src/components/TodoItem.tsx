import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { removeLoader, Todo } from '../app/slices/todo';


const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.todo);
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (isEditing) {
            setIsEditing(false);
            setEditedText('');
        }
        setIsEditing(!isEditing);
    };

    const handleRemove = (id: string | number) => {
        dispatch(removeLoader(id))
    }

    return (
        <View style={tw`flex-row items-center bg-white p-3 rounded-md mt-2 shadow-sm`}>
            {isEditing ? (
                <TextInput
                    style={tw`flex-1 border border-gray-300 rounded px-2 py-1 mr-2`}
                    value={editedText}
                    onChangeText={setEditedText}
                    autoFocus
                />
            ) : (
                <Text style={tw`flex-1 text-base`}>{todo.todo}</Text>
            )}
            <TouchableOpacity
                onPress={handleEdit}
                style={tw`bg-blue-500 rounded-md py-1 px-3 mr-2`}
            >
                <Text style={tw`text-white text-sm`}>{isEditing ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleRemove(todo.id)}
                style={tw`bg-red-500 rounded-md py-1 px-3`}
            >
                <Text style={tw`text-white text-sm`}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodoItem;