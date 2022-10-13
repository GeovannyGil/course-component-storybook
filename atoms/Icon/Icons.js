import React from 'react'
// import rightArrow from '../../assets/icons/rightArrow.svg'
import { mapIcon } from './helpers'
import './Icon.css'

// TODO: Use the Atom Picture
const Icon = ({ type }) => <div>
  <img src={mapIcon(type)}></img>
</div>

export default Icon