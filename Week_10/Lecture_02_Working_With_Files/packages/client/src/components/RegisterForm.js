import { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from './LoadingSpinner';

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  submitting: false,
  validated: false
}


const RegisterForm = () => {
  const [data, setData] = useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const { signUp } = useAuth()

  const handleSubmit = (e) => {
    const form = e.currentTarget

    e.preventDefault()
    e.stopPropagation()
    setErrors(_ => initialState)
    setData(d => ({ ...d, submitting: true }))

    if (form.checkValidity() === false) {
      const { username, password, confirmPassword } = data

      if (!username) {
        setErrors(err => ({ ...err, username: "Username is required." }))
      } else if (username.length < 4) {
        setErrors(err => ({ ...err, username: "Username must be at least 4 characters." }))
      }

      if (!password) {
        setErrors(err => ({ ...err, password: "Password is required." }))
      } else if (password.length < 8) {
        setErrors(err => ({ ...err, password: "Password must be at least 8 characters." }))
      } else if (password.length > 20) {
        setErrors(err => ({ ...err, password: "Password cannot be longer than 20 characters." }))
      }

      if (!confirmPassword) {
        setErrors(err => ({ ...err, confirmPassword: "Must confirm password." }))
      } else if (password !== confirmPassword) {
        setErrors(err => ({ ...err, confirmPassword: "Passwords must match." }))
      }
      setData(data => ({ ...data, submitting: false, validated: true }))
      return
    }


    signUp(data.username, data.password, data.confirmPassword)

    setData(data => ({ ...data, submitting: false }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(d => ({ ...d, [name]: value }))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} noValidate validated={data.validated}>
        <Form.Group className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            autoComplete="off"
            required
            minLength={4}
            name="username"
            value={data.username}
            onChange={handleChange} />
          <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            minLength={8}
            maxLength={20}
            name="password"
            value={data.password}
            onChange={handleChange} />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            minLength={8}
            maxLength={20}
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange} />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>
        <Col className="mb-3" as={Button} xs={12} type="submit" variant="primary" disabled={data.submitting}>
          {
            data.submitting ?
              <LoadingSpinner />
              :
              "Sign Up"
          }
        </Col>
        <Col as={Form.Text} xs={12}>
          Already have an account? <Link to="/auth/signin">Sign in.</Link>
        </Col>
      </Form>
    </Container>
  )
}

export default RegisterForm