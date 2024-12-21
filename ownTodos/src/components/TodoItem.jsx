import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeTodo, editTodo} from "../features/todo/todoSlice";

function TodoItem ({todo}) {
    const [newTodo, setNewTodo] = useState('')
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos)
    
        const editTodoHandler = (id, newTodo) => {
            if(!isTodoEditable === false) return
            dispatch(editTodo({id, newTodo}))
            setIsTodoEditable(false)
            setNewTodo('')
        }
    
        const removeTodoHandler = (id) => {
            dispatch(removeTodo(id))
            setIsTodoEditable(false)
        }

    return (
        <div>
            <ul>
            {todos.map((todo) => (
                <li
                key={todo.id}>
                {todo.text}</li>
            ))}
            <button
            onClick={() => {
                if(isTodoEditable) {
                    <input
                    type="text"
                    placeholder="Edit your todo..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    />
                    if(isTodoEditable.id === todo.id){
                        editTodoHandler(todo.id, newTodo)
                    }
                }
            }}
            >{isTodoEditable ? "📁" : "✏️"}</button>
            <button
            onClick={() => removeTodoHandler(todo.id)}
            >❌</button>
            </ul>
           
        </div>
    )
}

export default TodoItem;