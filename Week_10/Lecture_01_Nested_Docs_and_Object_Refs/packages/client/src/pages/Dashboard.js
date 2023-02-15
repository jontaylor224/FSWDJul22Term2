import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default Dashboard