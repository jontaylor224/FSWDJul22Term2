import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const ContextPage = () => {
  return (
    <Container>
      <h1>Context API</h1>
      <Outlet />
    </Container>
  )
}

export default ContextPage