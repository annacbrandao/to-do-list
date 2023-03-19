import React, { useState } from "react";

export const Form = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
    return (
        <form className="Form" onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder='Adicione sua tarefa aqui' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>ADD</button>
        </form>
    )
}