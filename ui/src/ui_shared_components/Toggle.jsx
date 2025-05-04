import React from 'react'
import './Toggle.scss'
// TODO: Add functionality to toggle the theme

const Toggle = ({ onToggle }) => {
  return (
    <label class="theme-toggle">
      <input type="checkbox" id="theme-toggle" onChange={onToggle} />
      <span class="slider"></span>
    </label>
  )
}

export default Toggle
