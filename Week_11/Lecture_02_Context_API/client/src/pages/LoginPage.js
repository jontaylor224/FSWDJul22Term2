import { useContext, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/authContext";
import { signinContext } from "../contexts/signinContext";

const LoginPage = () => {
  const { signIn, signOut } = useContext(authContext);
  const { form, errors, handleChange, resetForm } = useContext(signinContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    signIn(form.email, form.password);
  };

  useEffect(() => {
    signOut();
    resetForm();
  }, []);

  return (
    <Container>
      <h1 className="text-center">Sign In</h1>
      <Col
        as={Form}
        xs={12}
        md={{ span: 8, offset: 2 }}
        lg={{ span: 6, offset: 3 }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col
            xs={12}
            md={{ span: 6, offset: 3 }}
            lg={{ span: 4, offset: 4 }}
            as={Button}
            type="submit"
            variant="primary"
          >
            Log In
          </Col>
        </Row>
        <Col as={Form.Text} xs={12}>
          Don't have an account? <Link to="/register">Create one</Link>
        </Col>
      </Col>
    </Container>
  );
};

export default LoginPage;
