/* eslint-disable react/prop-types */

import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
	// eslint-disable-next-line react/prop-types
	todo,
	// eslint-disable-next-line react/prop-types
	handleUpdateTodo,
	// eslint-disable-next-line react/prop-types
	handleDeleteTodo,
	// eslint-disable-next-line react/prop-types
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};