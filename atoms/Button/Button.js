import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
import classnames from 'classnames'

const Button = ({ type, children, isBlock }) => (
  <button className={classnames('button', {
    [`type-${type}`]: type,
    'is-block': isBlock
  })}>
    {children}
  </button>
)

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  isBlock: PropTypes.bool
}

Button.defaultProps = {
  type: 'primary',
  isBlock: true
}