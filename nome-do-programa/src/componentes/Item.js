import React, { useState } from "react";

export const Item = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }
    return (
        <form className="Form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='Editar tarefa' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Editar</button>
        </form>
    )
}