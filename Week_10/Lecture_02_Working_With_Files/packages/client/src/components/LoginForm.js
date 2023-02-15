import React, { useState } from 'react'
import { Container, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from './LoadingSpinner'

const initialState = {
  username: "",
  password: "",
  submitting: false,
  validated: false
}

const LoginForm = () => {
  const [data, setData] = useState(initialState)
  const [errors, setErrors] = useState(initialState)
  const { signIn } = useAuth()

  const handleSubmit = (e) => {
    const form = e.currentTarget
    e.preventDefault()
    e.stopPropagation()

    setData(d => ({ ...d, submitting: true, validated: true }))

    if (form.checkValidity() === false) {
      setData(d => ({ ...d, submitting: false }))
      return
    }

    signIn(data.username, data.password)

    setData(d => ({ ...d, submitting: false }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(d => ({ ...d, [name]: value }))
  }

  return (
    <Container fluid>
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
          <Form.Control.Feedback type="invalid" >
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            value={data.password}
            onChange={handleChange} />
          <Form.Control.Feedback type="invalid" >
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Col as={Button} xs={12} type="submit" variant="primary" disabled={data.submitting}>
          {
            data.submitting ?
              <LoadingSpinner />
              : "Sign In"
          }
        </Col>
        <Col as={Form.Text} xs={12}>
          Don't have an account? <Link to="/auth/signup">Create One</Link>
        </Col>
      </Form>
    </Container>
  )
}

export default LoginForm