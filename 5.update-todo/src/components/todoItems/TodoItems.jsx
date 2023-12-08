import './TodoItems.css'
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md'

const TodoItems = ({ id, title, deleteTodo, setUpdateTodo, setToggle }) => {
	const handelClick = () => {
		setUpdateTodo({ id, title })
		setToggle(true)
	}
	return (
		<div className='todo-items'>
			<h3>{title}</h3>
			<div className='icons'>
				<span className='delete-icon' onClick={handelClick}>
					<MdOutlineEdit className='icon' />
				</span>
				<span className='delete-icon' onClick={() => deleteTodo(id)}>
					<MdOutlineDelete className='icon' />
				</span>
			</div>
		</div>
	)
}

export default TodoItems
