import React from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLogReg } from "../hooks";

const SignUpPage = () => {
  const { data, handleChange, handleSignup } = useLogReg("signup");

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>Create an Account</h1>
      <Col as={Form} xs={12} md={8} lg={6} onSubmit={handleSignup}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {data.errors.firstName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {data.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {data.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {data.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {data.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="d-flex justify-content-end mb-3">
          <Col as={Button} xs={12} md={6} type="submit" variant="primary">
            Sign Up
          </Col>
        </Form.Group>
        <Col as={Form.Text} xs={12}>
          Already have an account? <Link>Sign in.</Link>
        </Col>
      </Col>
    </Container>
  );
};

export default SignUpPage;
