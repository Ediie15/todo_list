/* eslint-disable react/prop-types */

import { TodoItem } from './TodoItem';

export const TodoList = ({
	// eslint-disable-next-line react/prop-types
	todos,
	// eslint-disable-next-line react/prop-types
	handleUpdateTodo,
	// eslint-disable-next-line react/prop-types
	handleDeleteTodo,
	// eslint-disable-next-line react/prop-types
	handleCompleteTodo,
}) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	)
}