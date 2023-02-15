import { useContext } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { uiContext } from "../contexts/UIProvider";
import NavBrand from "./NavBrand";
import NavLink from "./NavLink";

const Header = () => {
  const { theme, toggleTheme } = useContext(uiContext);

  return (
    <Navbar bg={theme} variant={theme}>
      <Container>
        <NavBrand as={Link} to="/">
          Week 11
        </NavBrand>
        <Navbar.Toggle aria-controls="my-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/reducers">Reducers</NavLink>
            <NavLink to="/context">Context</NavLink>
          </Nav>
          <div className={`d-flex cursor ${theme}`}>
            <span>Light</span>
            <Form.Check
              type="switch"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span>Dark</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
