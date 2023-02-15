import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

const Header = () => {
  const { isAuthenticated, email, signOut } = useContext(authContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleSignOut = () => {
    signOut();
    if (pathname.includes("dashboard")) {
      navigate("/");
    }
  };
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Hobby Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="hobby-nav" />
        <Navbar.Collapse id="hobby-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/hobbies">
              Explore
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <NavDropdown
              title={isAuthenticated ? `Welcome, ${email}` : "Join the Hub"}
            >
              {isAuthenticated ? (
                <>
                  <NavDropdown.Item as={Link} to="/account">
                    Account Preferences
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Log In
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Create Account
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
