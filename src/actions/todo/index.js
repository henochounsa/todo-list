/* eslint-disable camelcase */
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_ALL_TODO, SOMETHING } from '../../constants/'

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: {
        id: todo.id,
        title: todo.title,
        created_at: Date.now(),
        completed: false
    }
})

export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: {
        id: todo.id,
        title: todo.title
    }
})
export const toggleTodo = (id) => ({

    type: TOGGLE_TODO,
    payload: id
})
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
})

export const deleteAllTodo = (id) => ({
    type: DELETE_ALL_TODO
})