import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Modal = ({ handleAddTodo, show, children, value, handleUpdate }) => {
  const SHOWHIDECLASS = show ? 'modal display-block' : 'modal display-none';

  return (
      <div className={ SHOWHIDECLASS }>
          <section className="modal-main">
              <input
                onChange={ e => handleUpdate(e.target.value) }
                value={ value }
                type="text"
                placeholder="type a todo ..."
              />
              <button onClick={ handleAddTodo }>Add</button>
          </section>
      </div>
  );
};

Modal.propTypes = {
  handleAddTodo: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.element,
  value: PropTypes.string,
  handleUpdate: PropTypes.func

}
export default Modal;