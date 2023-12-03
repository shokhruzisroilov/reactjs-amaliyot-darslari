import './TodoItems.css'
import { MdDelete } from 'react-icons/md'

const TodoItems = ({ id, name, deleteTodo }) => {
	return (
		<div className='todo-items'>
			<h3>{name}</h3>
			<span className='delete-icon' onClick={() => deleteTodo(id)}>
				<MdDelete className='icon' />
			</span>
		</div>
	)
}

export default TodoItems
