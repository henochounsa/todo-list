/* eslint-disable camelcase */
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, DELETE_ALL_TODO } from '../constants'
const initial_state = [
    {
        id: 1,
        title: 'Programmer une todo',
        created_at: 1567322133316,
        completed: false,
    }
]
export default (state = initial_state, action) => {
    switch (action.type) {

        case ADD_TODO:

            return [
                ...state,
                action.payload
            ]

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (todo.id === action.payload) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }

                return todo
            })

        case UPDATE_TODO:
            return state.map((todo, index) => {
                if (todo.id === action.payload.id) {
                    return Object.assign({}, todo, {
                        title: action.payload.title
                    })
                }

                return todo
            })

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)

        case DELETE_ALL_TODO:
            return []

        default: {
            return state
        }
    }
}