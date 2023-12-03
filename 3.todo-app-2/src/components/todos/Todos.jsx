import './Todos.css'
import TodoItems from '../todoItems/TodoItems'

const Todos = ({ todos, deleteTodo }) => {
	return (
		<>
			{todos &&
				todos.map(item => {
					return (
						<TodoItems
							key={item.id}
							id={item.id}
							name={item.name}
							deleteTodo={deleteTodo}
						/>
					)
				})}
			<h3>{todos.length === 0 ? 'No Todo' : ''}</h3>
		</>
	)
}

export default Todos
