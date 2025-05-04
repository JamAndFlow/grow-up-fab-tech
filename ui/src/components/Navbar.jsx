import React, { useContext } from 'react'
import { Link } from 'react-router'
import Toggle from '../ui_shared_components/Toggle'
import { ThemeContext } from '../context/ThemeContext'

import './Navbar.scss'
const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Toggle onToggle={toggleTheme} />
    </nav>
  )
}

export default Navbar
