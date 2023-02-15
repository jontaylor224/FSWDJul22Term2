import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, Navigate, Outlet, useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import useAuth from '../hooks/useAuth'

const Dashboard = () => {
  const { isAuthenticated, user } = useAuth()
  const { userId } = useParams()

  console.log("huh?")

  if (isAuthenticated === undefined) {
    return <LoadingSpinner full />
  } else if (isAuthenticated === false || user._id !== userId) {
    return <Navigate to="/auth/signin" />
  }

  return (
    <Container>
      <nav>
        <Link to={`/box/${userId}`}>Dashboard</Link>&nbsp;|&nbsp;
        <Link to={`/box/${userId}/upload`}>Upload File</Link>
      </nav>
      <Outlet />
    </Container>
  )
}

export default Dashboard