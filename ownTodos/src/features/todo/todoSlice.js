import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id: 1,
            text: "Hello world",
        }
    ]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => (
                todo.id === action.payload.id ? {...todo, text: action.payload.editedText} : todo
            ))
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions;

export default todoSlice.reducer