import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todo from '../components/todo'
import ButtonAdd from '../components/btn-add'
import Modal from '../components/modal'
import './index.css'

import { addTodo, toggleTodo, deleteTodo, updateTodo, deleteAllTodo } from '../actions/todo'

class TodoApp extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            value: '',
            filtre: 'all',
            todos: [],
            isDisable: true,
            isEditing: null
        }
    }


    toggleModal = () => this.setState({ showModal: !this.state.showModal, value: '' })

    hideModal = () => this.setState({ showModal: false })

    showModal = () => this.setState({ showModal: true })

    handleUpdate = (value) => this.setState({ value })

    handleAddTodo = () => {

        if (this.state.value !== '') {
            let todo = {
                id: this.props.todos.length + 1,
                title: this.state.value,
            }
            this.props.addTodo(todo)
            this.setState({ value: '', showModal: false })
        }
    }

    handleToggleTodo = (id) => this.props.toggleTodo(id)

    handleDeleteTodo = (id) => this.props.deleteTodo(id)

    filter = (filtre) => this.setState({ filtre })

    toggleEditable = () => this.setState({ isDisable: !this.state.isDisable })

    handleEditTodo = (todo_text, todo_id) => {
        this.setState({ isDisable: false, value: todo_text, isEditing: todo_id })
    }

    handleDeleteAllTodo = (filter) => {
        this.props.deleteAllTodo()
    }

    handleValidateUpdate = (id) => {
        let update_data = {
            id: id,
            title: this.state.value
        }
        this.props.updateTodo(update_data)
        this.setState({ isDisable: true, isEditing: null })

    }

    render() {
        const all_item_class = this.state.filtre === 'all' ? 'item active' : 'item'
        const end_item_class = this.state.filtre === 'end' ? 'item active' : 'item'
        const progress_item_class = this.state.filtre === 'progress' ? 'item active' : 'item'

        let filteredTodo = []
        if (this.state.filtre === 'end') {
            filteredTodo = this.props.todos.filter(todo => todo.completed)
        } else if (this.state.filtre === 'progress') {
            filteredTodo = this.props.todos.filter(todo => !todo.completed)
        } else {
            filteredTodo = this.props.todos
        }

        return (
            <div className="container">
                <div className="header">
                    <div
                        onClick={() => this.filter('all')}
                        className={all_item_class}>
                        Toutes
                    </div>
                    <div
                        onClick={() => this.filter('end')}
                        className={end_item_class}>
                        Terminées
                    </div>
                    <div
                        onClick={() => this.filter('progress')}
                        className={progress_item_class}>
                        En cours
                    </div>

                    <div
                        onClick={() => this.handleDeleteAllTodo('delete_all')}
                        className="delete-all">
                        Supprimer tout
                    </div>
                </div>
                <div className="card">
                    <Todo
                        handleToggleTodo={this.handleToggleTodo}
                        handleDeleteTodo={this.handleDeleteTodo}
                        handleUpdate={this.handleUpdate}
                        handleValidateUpdate={this.handleValidateUpdate}
                        isDisable={this.state.isDisable}
                        value={this.state.value}
                        isEditing={this.state.isEditing}
                        handleEditTodo={this.handleEditTodo}
                        todos={filteredTodo}
                    />
                    <Modal
                        value={this.state.value}
                        handleUpdate={this.handleUpdate}
                        show={this.state.showModal}
                        handleAddTodo={this.handleAddTodo}
                    />
                    <ButtonAdd action={this.toggleModal} />
                </div>
            </div>
        )
    }
}

TodoApp.propTypes = {
    todos: PropTypes.array,
    addTodo: PropTypes.func,
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func,
    progressTodo: PropTypes.func,
    endedTodo: PropTypes.func
}

const mapStateToProps = state => ({
    todos: state.todos
})
export default connect(
    mapStateToProps,
    { addTodo, toggleTodo, deleteTodo, updateTodo, deleteAllTodo }
)(TodoApp)