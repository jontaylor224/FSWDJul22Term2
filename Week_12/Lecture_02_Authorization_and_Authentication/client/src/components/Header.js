import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
const Header = () => {
  const {
    auth: { isAuthenticated, user },
    signOut,
  } = useAuth();
  return (
    <Navbar variant="dark" bg="dark" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Auth&Auth
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-nav" />
        <Navbar.Collapse id="my-nav">
          <Nav className="me-auto"></Nav>

          <Nav>
            {isAuthenticated ? (
              <NavDropdown title={`${user.email} Options`}>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin">
                  Sign In
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Create Account
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
