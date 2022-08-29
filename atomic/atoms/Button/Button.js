import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => <button>{children}</button>

export default Button

Button.prposTypes = {
  children: PropTypes.node.isRequired
}