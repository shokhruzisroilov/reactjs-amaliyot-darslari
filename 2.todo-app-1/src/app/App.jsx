import './App.css'
import AddTodo from '../components/addTodo/AddTodo'
import Todos from '../components/todos/Todos'

function App() {
	return (
		<div className='app'>
			<h1 className='header'>TO-DO APP</h1>
      <AddTodo />
      <div className='line'></div>
      <Todos />
		</div>
	)
}

export default App
