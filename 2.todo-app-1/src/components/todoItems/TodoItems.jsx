import './TodoItems.css'
import { MdDelete } from 'react-icons/md'

const TodoItems = () => {
	return (
		<div className='todo-items'>
			<h3>This is a task</h3>
			<span className='delete-icon'>
				<MdDelete className='icon'/>
			</span>
		</div>
	)
}

export default TodoItems
