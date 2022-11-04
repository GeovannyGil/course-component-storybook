import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Heading.css'

const Heading = ({ children, color, size }) => (
  <h1
    className={classnames('heading', {
      [`color-${color}`]: color,
      [`size-${size}`]: size,
    })}
  >
    {children}
  </h1>
)

export default Heading

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
}

Heading.defaultProps = {
  color: 'default',
  size: 'md',
}
