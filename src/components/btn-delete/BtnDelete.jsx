
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const BtnDelete = ({ deleteTodo }) => {

    return (
        <div onClick={deleteTodo} className="btn-delete">
            <span>
                x
           </span>
        </div>
    )
}

BtnDelete.propTypes = {
    deleteTodo: PropTypes.func
}

export default BtnDelete;