import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { isAuthenticated, signOut } = useAuth()
  return (
    <Navbar variant="dark" bg="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">KenzieBox</Navbar.Brand>
        <Navbar.Toggle aria-controls="burger-nav" />
        <Navbar.Collapse id="burger-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav>
            {
              isAuthenticated ?
                <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
                :
                <Nav.Link as={Link} to="/auth/signin">Sign In</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header