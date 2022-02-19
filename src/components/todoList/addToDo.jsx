import TodoList from './list';
import Todo from './todo';
import { View, StatusBar } from 'react-native';
import { useState } from "react";


export default function AddTodo() {

    const [todos, setTodos] = useState([
        {
            title: "task 1",
            done: false,
        },
        {
            title: "task 2",
            done: true,
        } 
    ])
    console.log(todos);

    const todoAddHandler = (todo) => {
        setTodos([...todos, todo]);
    }
    return (
        <View style={{ height: '100%' }}>
            <StatusBar hidden />
            <Todo todoAdd={todoAddHandler} />
            <TodoList list={todos} />
        </View>
    )
}