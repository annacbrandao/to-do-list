import React, { useState } from "react";
import { Form } from "./Form";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./Todo";
import { Item } from "./Item";
uuidv4();

export const Wrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }
    const alternateComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }
    return (
        <div className='Wrapper'>
            <h1>To-do List</h1>
            <Form addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <Item editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index} alternateComplete={alternateComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))}
        </div>
    )
}