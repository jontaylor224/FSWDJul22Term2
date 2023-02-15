import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Hero Central</Navbar.Brand>
        <Navbar.Toggle aria-controls="collapse-nav" />
        <Navbar.Collapse id="collapse-nav">
          <Nav>
            <Nav.Link as={Link} to="/heroes/create">Add Hero</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header