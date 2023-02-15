import React, { useContext } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { uiContext } from '../contexts/UIProvider'

const NavBrand = ({ to, children }) => {
  const { theme } = useContext(uiContext)

  return (
    <Navbar.Brand className={theme} as={Link} to={to}>{children}</Navbar.Brand>
  )
}

export default NavBrand