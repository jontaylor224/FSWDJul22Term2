import { useContext } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { uiContext } from '../contexts/UIProvider'

const NavLink = ({ to, children }) => {
  const { theme } = useContext(uiContext)
  return (
    <Nav.Link className={theme} as={Link} to={to}>{children}</Nav.Link>
  )
}

export default NavLink