import { ErrorResponse } from '@remix-run/router'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import useApi from '../hooks/useApi'

const initialState = {
  name: "",
  alias: "",
  powers: [],
  validated: false
}

const CreateHero = () => {
  const [data, setData] = useState(initialState)
  const [errors, setErrors] = useState({ name: "", alias: "", powers: "" })
  const { createHero } = useApi()

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault()
    e.stopPropagation()
    setData({
      ...data,
      validated: true
    })

    if (form.checkValidity() === false) {
      const { name, alias, powers } = data
      const newErrors = { name: "", alias: "", powers: "" }
      newErrors.name = !name ?
        "Name is required."
        :
        name.length > 30 ?
          "Name can't be longer than 30 characters."
          : ""
      newErrors.alias = alias.length === 1 ?
        "Alias is optional, but if you provide a value must be at least 2 characters."
        :
        alias.length > 61 ?
          "Alias can't be more than 61 characters."
          : ""
      newErrors.powers = powers.some((pow) => !pow) ? "Powers must have text. If you accidentally added a textbox, just click the x to remove it." : ""
      setErrors(newErrors)
      return
    }
    let dataToSubmit
    if (data.alias) {
      dataToSubmit = data
    } else {
      const { alias, ...restOfData } = data
      dataToSubmit = restOfData
    }
    createHero(dataToSubmit)
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleChangePower = (e, i) => {
    setData({
      ...data,
      powers: data.powers.map((pow, idx) => i === idx ? e.target.value : pow)
    })
  }

  const addNewPower = () => {
    setData({
      ...data,
      powers: [...data.powers, ""]
    })
  }

  console.log(data)

  return (
    <Container fluid>
      <h1>Create a New Hero</h1>
      <Col as={Form} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit} validated={data.validated} noValidate>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="heroName">Name</Form.Label>
          <Form.Control
            id="heroName"
            autoComplete="off"
            type="text"
            name="name"
            value={data.name}
            required
            maxLength={30}
            onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label htmlFor="heroAlias">Alias</Form.Label>
          <Form.Control
            id="heroAlias"
            aria-describedby="aliasHelpBlock"
            autoComplete="off"
            type="text"
            name="alias"
            value={data.alias}
            minLength={2}
            maxLength={61}
            onChange={handleChange} />
          <Form.Text id="aliasHelpBlock" muted>
            Hero identities are often secret. Leave this blank if the identity is unknown.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            {errors.alias}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Label className="d-flex justify-content-between">Powers <button type="button" className="addPowerBtn" onClick={addNewPower}>+</button></Form.Label>
          {
            data.powers.map((pow, i) => (
              <Row className="mb-2 d-flex justify-content-between" key={`power_${i}`}>
                <Col xs={8}>
                  <Form.Control
                    xs={8}
                    type="text"
                    name={`powers_${i}`}
                    value={pow}
                    required
                    onChange={(e) => handleChangePower(e, i)} />
                </Col>
                <Col as={Button} variant="danger" xs={{ span: 2, offset: 2 }} type="button" onClick={() => setData({ ...data, powers: data.powers.filter((_, idx) => i !== idx) })}>X</Col>
              </Row>
            ))
          }
        </Form.Group>
        <Form.Group>
          <Col as={Button} xs={12} md={{ span: 6, offset: 6 }} type="submit" variant="primary">Submit</Col>
        </Form.Group>
      </Col>
    </Container >
  )
}

export default CreateHero