import React, { useState } from 'react'
import { Button, Row, Col, Container, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'
import { api } from '../utils/apiConfig'

const FileUploader = () => {
  const [fileName, setFileName] = useState("")
  const [superAwesomeFile, setSuperAwesomeFile] = useState()
  const [filePreview, setFilePreview] = useState()
  const { user } = useAuth()

  console.log(user)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello?")
    api.post(`/users/${user._id}/file`, { path: filePreview })
      .then(res => {
        console.log('there is no toast. the toast is a lie!')
        toast.success("Success! You have files!")
      })
      .catch(err => toast.error(" >:( "))
  }

  const handleFileChange = (e) => {
    setSuperAwesomeFile(e.target.files[0])
  }

  const handleUploadFile = (e) => {
    // Create formData
    const formData = new FormData()

    // Append our new file to the form data
    formData.append('superAwesomeFile', superAwesomeFile)


    api.post('/files', formData)
      .then(res => {
        setFilePreview(res.path)
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Col xs={12} md={{ span: 6, offset: 3 }} >
          <Form.Group className="mb-5">
            <Form.Label>Upload File</Form.Label>
            <Row >
              <Col xs={8}>
                <Form.Control
                  type="file"
                  name="superAwesomeFile"
                  onChange={handleFileChange} />
              </Col>
              <Col as={Button} xs={4} type="button" variant="info" onClick={handleUploadFile}>Upload</Col>
            </Row>
          </Form.Group>
          <Col as={Button} xs={12} type="submit" variant="primary">Submit</Col>
        </Col>
        {
          filePreview ?
            <img style={{ width: "250px", height: "auto" }} src={`http://localhost:8080/${filePreview}`} alt="Your preview" />
            : ''
        }
      </Form>
    </Container>
  )
}

export default FileUploader