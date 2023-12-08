import './Todos.css'
import TodoItems from '../todoItems/TodoItems'

const Todos = ({ todos, deleteTodo, setUpdateTodo, setToggle }) => {
	// console.log(todos)
	return (
		<>
			{todos &&
				todos.map(item => {
					return (
						<TodoItems
							key={item.id}
							title={item.title}
							id={item.id}
							deleteTodo={deleteTodo}
							setUpdateTodo={setUpdateTodo}
							setToggle={setToggle}
						/>
					)
				})}
			<h3>{todos.length === 0 ? 'No Todo' : null}</h3>
		</>
	)
}

export default Todos
