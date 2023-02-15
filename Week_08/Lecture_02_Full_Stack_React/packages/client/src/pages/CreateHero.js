import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from '../utils/axiosConfig'
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: "",
  alias: "",
  powers: [],
  errors: {
    name: "",
    alias: "",
    powers: ""
  }
}

const initialErrors = {
  name: "",
  alias: "",
  powers: ""
}

const CreateHero = () => {
  const [data, setData] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    const { name, alias, powers } = data

    const errors = {}
    if (!name) {
      errors.name = "Name is required"
    }
    if (!alias) {
      errors.alias = "Alias is required"
    }
    if (powers.some(pow => pow === "")) {
      errors.powers = "This hero can have no powers, but any powers added must be populated"
    }

    if (Object.keys(errors).length > 0) {
      toast.error("Invalid submission. Fix errors and try again.")
      setData({
        ...data,
        errors: errors
      })
      return
    }

    axios.post('heroes', { name, alias, powers })
      .then(res => {
        toast.success(`Success! Added ${name}`)
        navigate('/')
      })
      .catch(err => console.log(err))
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
      powers: data.powers.map((power, idx) => i !== idx ? power : e.target.value)
    })
  }

  const startAddPower = () => {
    setData({
      ...data,
      powers: [...data.powers, ""]
    })
  }

  const deleteNewPower = (i) => {
    setData({
      ...data,
      powers: data.powers.filter((_, idx) => idx !== i)
    })
  }

  return (
    <Container fluid>
      <h2>Add a Hero</h2>
      <Row>
        <Col as={Form} xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange} />
            {
              data.errors.name && <Form.Text className="text-danger">{data.errors.name}</Form.Text>
            }
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Alias:</Form.Label>
            <Form.Control
              type="text"
              name="alias"
              value={data.alias}
              onChange={handleChange} />
            {
              data.errors.alias && <Form.Text className="text-danger">{data.errors.alias}</Form.Text>
            }
          </Form.Group>
          <Form.Group className="mb-2">
            <Col as={Form.Label} xs={12} md={5}>Powers</Col>
            <Col as={Button} xs={12} md={{ span: 5, offset: 2 }} type="button" variant="info" onClick={startAddPower}>Add a Power</Col>
            {
              data.powers.map((power, i) => (
                <Row key={`power_${i}`}>
                  <Col as={Form.Group} xs={9}>
                    <Form.Control value={power} onChange={(e) => handleChangePower(e, i)} />
                  </Col>
                  <Col as={Button} type="button" xs={2} variant="danger" onClick={(e) => deleteNewPower(i)}>X</Col>
                </Row>
              ))
            }
            {
              data.errors.powers && <Form.Text className="text-danger">{data.errors.powers}</Form.Text>
            }
          </Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
        </Col>
      </Row>
    </Container >
  )
}

export default CreateHero