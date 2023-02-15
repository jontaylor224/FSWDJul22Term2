import React, { useContext, useEffect } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { signinContext } from "../contexts/signinContext";

const RegisterPage = () => {
  const { form, errors, handleChange, resetForm } = useContext(signinContext);
  const { signUp, signOut } = useContext(authContext);

  const { firstName, lastName, email, password, confirmPassword } = form;

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await signUp(firstName, lastName, email, password, confirmPassword);
  };

  useEffect(() => {
    signOut();
    resetForm();
  }, []);

  return (
    <Container>
      <h1 className="text-center">Create an Account</h1>
      <Col
        as={Form}
        xs={12}
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>
        <Row as={Form.Group} className="mb-3">
          <Col
            as={Button}
            xs={12}
            md={{ span: 4, offset: 4 }}
            type="submit"
            variant="primary"
          >
            Register
          </Col>
        </Row>
        <Col xs={12} as={Form.Text}>
          Already have an account? <Link to="/login">Log In</Link>
        </Col>
      </Col>
    </Container>
  );
};

export default RegisterPage;
