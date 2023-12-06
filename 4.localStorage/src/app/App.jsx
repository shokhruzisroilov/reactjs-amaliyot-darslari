import './App.css'
import AddTodo from '../components/addTodo/AddTodo'
import Todos from '../components/todos/Todos'
import { useEffect, useState } from 'react'

const getTodo = () => {
	const data = localStorage.getItem('Todos')
	if(data){
		return JSON.parse(data)
	}
	return []
}

function App() {
	const [todos, setTodos] = useState(getTodo())

	//localStorage
	useEffect(() => {
		localStorage.setItem('Todos', JSON.stringify(todos))
	}, [todos])

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
