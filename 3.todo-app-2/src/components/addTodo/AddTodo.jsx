import { useState } from 'react'
import './AddTodo.css'

function AddTodo({ addTodoFunc }) {
	const [addTodo, setAddTodo] = useState('')
	// console.log(addTodo)

	// handleButton
	const handleClick = () => {
		addTodoFunc(addTodo)
		setAddTodo('')
	}

	return (
		<div className='add-todo'>
			<input
				type='text'
				placeholder='Add Task'
				value={addTodo}
				onChange={e => setAddTodo(e.target.value)}
			/>
			<button onClick={handleClick}>Add task</button>
		</div>
	)
}

export default AddTodo
