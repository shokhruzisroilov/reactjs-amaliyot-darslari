import './Todos.css'
import TodoItems from '../todoItems/TodoItems'

const Todos = ({ todos, deleteTodo }) => {
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
						/>
					)
				})}
			<h3>{todos.length === 0 ? 'No Todo' : null}</h3>
		</>
	)
}

export default Todos
