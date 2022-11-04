import React from 'react'
// import rightArrow from '../../assets/icons/rightArrow.svg'
import { mapIcon } from './helpers'
import './Icon.css'
import PropTypes from 'prop-types'

// TODO: Use the Atom Picture
const Icon = ({ type }) => (
  <div>
    <img src={mapIcon(type)}></img>
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Icon
