import './App.css'
import AddTodo from '../components/addTodo/AddTodo'
import Todos from '../components/todos/Todos'
import { useState } from 'react'

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, name: 'Todos1' },
		{ id: 2, name: 'Todos2' },
		{ id: 3, name: 'Todos3' },
		{ id: 4, name: 'Todos4' },
	])

	//addTodo
	const addTodo = str => {
		if (str) {
			let newTodo = { id: todos.length + 1, name: str }
			setTodos([...todos, newTodo])
		}
	}

	//deleteTodo
	const deleteTodo = (id) => {
		let newTodo = todos.filter(item => item.id !== id)
		setTodos(newTodo)
	}

	return (
		<div className='app'>
			<h1 className='header'>TO-DO APP</h1>
			<AddTodo addTodo={addTodo} />
			<div className='line'></div>
			<Todos todos={todos} deleteTodo={deleteTodo}/>
		</div>
	)
}

export default App
