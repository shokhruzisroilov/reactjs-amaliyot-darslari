import './UpdateTodo.css'

const UpdateTodo = ({
	updateTodo,
	changeTodo,
	updateTodoClick,
	cancelTodo,
}) => {
	return (
		<div className='update-todo'>
			<input
				type='text'
				placeholder='Update Task'
				value={updateTodo && updateTodo.title}
				onChange={e => changeTodo(e)}
			/>
			<button className='btn btn-update' onClick={updateTodoClick}>
				Update
			</button>
			<button className='btn btn-cancel' onClick={cancelTodo}>
				Cancel
			</button>
		</div>
	)
}

export default UpdateTodo
