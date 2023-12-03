import './AddTodo.css'
import { useState } from 'react'

function AddTodo({addTodo}) {
	const [input, setInput] = useState('')

	//button click
	const handleClick = () => {
		addTodo(input)
		setInput('')
	}

	return (
		<div className='add-todo'>
			<input type='text' placeholder='Add Task' value={input} onChange={(e) => setInput(e.target.value)}/>
			<button onClick={handleClick}>Add task</button>
		</div>
	)
}

export default AddTodo
