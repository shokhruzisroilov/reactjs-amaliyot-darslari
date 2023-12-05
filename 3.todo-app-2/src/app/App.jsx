import './App.css'
import AddTodo from '../components/addTodo/AddTodo'
import Todos from '../components/todos/Todos'
import { useState } from 'react'

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, title: 'todo1' },
		{ id: 2, title: 'todo2' },
		{ id: 3, title: 'todo3' },
		{ id: 4, title: 'todo4' },
	])
	//addTodo
	const addTodoFunc = str => {
		if (str) {
			let newTodo = { id: todos.length + 1, title: str }
			setTodos([...todos, newTodo])
		}
	}

	//deleteTodo
	const deleteTodo = id => {
		let newTodo = todos.filter(item => item.id !== id)
		setTodos(newTodo)
	}

	return (
		<div className='app'>
			<h1 className='header'>TO-DO APP</h1>
			<AddTodo addTodoFunc={addTodoFunc} />
			<div className='line'></div>
			<Todos todos={todos} deleteTodo={deleteTodo} />
		</div>
	)
}

export default App
