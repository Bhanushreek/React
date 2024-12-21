import React, {useState} from "react";
import { useSelector ,useDispatch } from "react-redux";
import {addTodo, removeTodo, editTodo} from "../features/todo/todoSlice"

function TodoForm() {
    const [newTodo, setNewTodo] = useState('')
    const [isTodoEditable, setIsTodoEditable] = useState(null)
    const [editedText, setEditedText] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(newTodo) {
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }

    const todos = useSelector((state) => state.todos)
    
        const editTodoHandler = (id, editedText) => {
            if(editedText) {
                dispatch(editTodo({id, editedText}))
                setIsTodoEditable(null);
                setEditedText("")
            }
        }
    
        const removeTodoHandler = (id) => {
            dispatch(removeTodo(id))
            setIsTodoEditable(null)
        }

        
    return (
        <form onSubmit={addTodoHandler}>
            <input 
             type="text"
             placeholder="Write a todo..."
             value={newTodo}
             onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
            type="submit"
            >Add</button>
                <ul>
                {todos.map((todo) => (
                    <li
                    key={todo.id}>
                   {isTodoEditable === todo.id ? (
                    <input 
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    placeholder="Edit todo..."
                    />
                   ) : (
                    <span>{todo.text}</span>
                   )}
                   {isTodoEditable === todo.id ? (
                    <button
                    onClick={() => {
                        editTodoHandler(todo.id, editedText)
                    }}
                    >📁</button>
                   ) : (
                    <button 
                    onClick={() => {
                        setIsTodoEditable(todo.id)
                        setEditedText()
                    }}
                    >✏️</button>
                   )}
                <button
                onClick={() => removeTodoHandler(todo.id)}
                >❌</button>
                </li>
                ))}
                </ul>
        </form>
    )
}

export default TodoForm;