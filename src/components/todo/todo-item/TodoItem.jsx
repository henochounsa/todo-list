import React from 'react'
import PropTypes from 'prop-types'
import BtnDelete from '../../btn-delete'
import BtnEdit from '../../btn-edit'
import BtnValidate from '../../btn-validate'

import './index.css'

const TodoItem = ({ todo, toggleTodo, deleteTodo, handleUpdate, handleValidateUpdate, isDisable, handleEditTodo, value, isEditing }) => {

    let input_value = isEditing && isEditing === todo.id ? value : todo.title
    let edit_or_validate = isEditing && isEditing === todo.id ?
        <BtnValidate handleValidateUpdate={handleValidateUpdate} /> :
        <BtnEdit handleEditTodo={handleEditTodo} todo_id={todo.id} todo_text={todo.title} />

    return (
        <div className="todo-item">
            <label className="switch">
                <input onChange={toggleTodo} checked={todo.completed} type='checkbox' name='check' />
                <span className="slider round"></span>
            </label>
            <input
                onChange={e => handleUpdate(e.target.value)}
                disabled={!(isEditing && isEditing === todo.id)}
                className="text"
                type="text"
                value={input_value}
            />

            {edit_or_validate}

            <BtnDelete deleteTodo={deleteTodo} />
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    handleUpdate: PropTypes.func,
    isDisable: PropTypes.bool,
    handleEditTodo: PropTypes.func,
    value: PropTypes.string,
    handleValidateUpdate: PropTypes.func,
    isEditing: PropTypes.any
}
export default TodoItem;