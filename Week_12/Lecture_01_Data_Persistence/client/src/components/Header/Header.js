import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUI } from "../../contexts/UIContext";

const Header = () => {
  const { theme } = useUI();
  return (
    <Navbar bg={theme} variant={theme} expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Persistence
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="my-nav" />
        <Navbar.Collapse id="my-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Options">
              <NavDropdown.Item as={Link} to="/preferences">
                Preferences
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
