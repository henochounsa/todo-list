import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todo-item'

import './index.css'

const Todo = ({ todos, handleToggleTodo, handleDeleteTodo, handleUpdate, handleValidateUpdate, isDisable, handleEditTodo, value, isEditing }) => {

    return (
        <div className="todo-card">
            {
                todos.map((todo, index) => (
                    <TodoItem
                        toggleTodo={() => handleToggleTodo(todo.id)}
                        deleteTodo={() => handleDeleteTodo(todo.id)}
                        todo={todo}
                        handleValidateUpdate={() => handleValidateUpdate(todo.id)}
                        value={value}
                        isDisable={isDisable}
                        handleEditTodo={handleEditTodo}
                        handleUpdate={handleUpdate}
                        key={todo.id}
                        isEditing={isEditing}
                    />
                ))
            }
        </div>
    )
}
Todo.propTypes = {
    todos: PropTypes.array,
    handleToggleTodo: PropTypes.func,
    handleDeleteTodo: PropTypes.func,
    handleUpdate: PropTypes.func,
    isDisable: PropTypes.bool,
    handleEditTodo: PropTypes.func,
    value: PropTypes.string,
    handleValidateUpdate: PropTypes.func,
    isEditing: PropTypes.any
}
export default Todo;