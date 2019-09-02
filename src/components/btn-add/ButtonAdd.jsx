import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const ButtonAdd = props => {

  return (
      <div className="btn-add" onClick= { props.action }>
          <span>
        +
          </span>
      </div>
  )
}

ButtonAdd.propTypes = {
  action: PropTypes.func
}

export default ButtonAdd;