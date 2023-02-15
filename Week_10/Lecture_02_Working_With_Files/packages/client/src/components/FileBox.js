import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from './LoadingSpinner'

const FileBox = () => {
  const [loading, setLoading] = useState(true)
  const { isAuthenticated, user } = useAuth()

  useEffect(() => {
    setLoading(false)
  }, [isAuthenticated])

  return (
    <Container>
      {
        loading ?
          <LoadingSpinner full />
          :
          <>
            {
              user.files.map((file, i) => (
                <img key={`${user._id}_file_${i}`}
                  style={{ width: "250px", height: "auto" }}
                  src={`http://localhost:8080/${file}`}
                  alt="image thing" />
              ))
            }
          </>
      }
    </Container>
  )
}

export default FileBox