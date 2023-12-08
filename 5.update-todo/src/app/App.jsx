import './App.css'
import AddTodo from '../components/addTodo/AddTodo'
import Todos from '../components/todos/Todos'
import UpdateTodo from '../components/updateTodo/UpdateTodo'
import { useEffect, useState } from 'react'

const getTodo = () => {
	const data = localStorage.getItem('Todos')
	if (data) {
		return JSON.parse(data)
	}
	return []
}

function App() {
	const [todos, setTodos] = useState(getTodo())
	const [updateTodo, setUpdateTodo] = useState('')
	const [toggle, setToggle] = useState(false)

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

	//changeTodo
	const changeTodo = e => {
		let newTodo = { id: updateTodo.id, title: e.target.value }
		setUpdateTodo(newTodo)
	}

	//updateTodo
	const updateTodoClick = () => {
		if (updateTodo) {
			let filterTodo = [...todos].filter(item => item.id !== updateTodo.id)
			setTodos([...filterTodo, updateTodo])
		}
		setUpdateTodo('')
		setToggle(false)
	}

	//cancelTodo
	const cancelTodo = () => {
		setUpdateTodo('')
		setToggle(false)
	}

	return (
		<div className='app'>
			<h1 className='header'>TO-DO APP</h1>
			<AddTodo addTodoFunc={addTodoFunc} />
			{toggle ? (
				<UpdateTodo
					updateTodo={updateTodo}
					changeTodo={changeTodo}
					updateTodoClick={updateTodoClick}
					cancelTodo={cancelTodo}
				/>
			) : null}

			<div className='line'></div>
			<Todos
				todos={todos}
				deleteTodo={deleteTodo}
				setUpdateTodo={setUpdateTodo}
				setToggle={setToggle}
			/>
		</div>
	)
}

export default App
