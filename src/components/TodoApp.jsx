import React, { useState } from 'react'
import './App.css'
import { useTodo } from '../context/context';
function TodoApp() {
    const [todo, setTodo] = useState('')
    const {addTodo}  = useTodo()
    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }
    return (
        <>
            <form onSubmit={add}>
                <div className='setHead'>
                    <h1 className='heading'>Manage your todos</h1>
                </div>
                <div className='main'>
                    <div>
                        <input className='input'
                            type="text"
                            placeholder='Write Todos...'
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={add} className='addBtn'>Add</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TodoApp