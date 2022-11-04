import React from 'react'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import propTypes from 'prop-types'

const ButtonIcon = ({ type, children, icon }) => (
  <Button type={type} isBlock={false}>
    <span style={{ marginRight: 5 }}>{children}</span>{' '}
    {/* FIXME: Add vertical spacer component */}
    <Icon type={icon} />
  </Button>
)

// Orders of the PropTypes are important for the documentation
ButtonIcon.propTypes = {
  children: propTypes.node.isRequired,
  icon: propTypes.string.isRequired,
  type: propTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

ButtonIcon.defaultProps = {
  type: 'secondary',
  icon: 'rightArrow',
}

export default ButtonIcon
