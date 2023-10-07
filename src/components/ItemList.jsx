import React, { useState } from 'react'
import './App.css'
import { useTodo } from '../context/context'

function ItemList({ todo }) {
    console.log(todo.completed)
    const [isTodoEditable, setIsTodoEditAble] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { toggleComplete, updateTodo, deleteTodo } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditAble(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <>
            <div className={`itemList ${todo.completed ? 'bg-color-true' : 'bg-color-false'}`}>
                <div className='section1'>
                    <div>
                        <input className='checkbox'
                            type="checkbox"
                            checked={todo.completed}
                            onChange={toggleCompleted}
                            
                        />
                    </div>
                    <div>
                        <input type="text"
                            className={`hiddenInput ${isTodoEditable ? 'afterChecked' : 'checkefFalse'} ${todo.completed ? 'lineThrough' : ""}`}
                            value={todoMsg}
                            onChange={(e) => setTodoMsg(e.target.value)}
                            readOnly={!isTodoEditable}
                        />
                    </div> 
                </div>
                <div className='btns'>
                    {/* Edit & Update */}
                    <button className='btn'
                        onClick={() => {
                            if (todo.completed) return;
                            if (isTodoEditable) {
                                editTodo();
                            } else setIsTodoEditAble((prev) => !prev);
                        }}
                        disabled={todo.completed}
                    > {isTodoEditable ? '📁' : '✏️'} </button>
                    {/* Delete tdod */}
                    <button className='btn'
                        onClick={() => deleteTodo(todo.id)}>❌</button>
                </div>
            </div>
        </>
    )
}

export default ItemList