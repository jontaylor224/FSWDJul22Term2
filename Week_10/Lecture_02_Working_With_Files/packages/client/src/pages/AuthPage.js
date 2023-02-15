import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Outlet, useLocation } from 'react-router-dom'

const AuthPage = () => {
  const { pathname } = useLocation()
  const [title, setTitle] = useState(() => pathname.split("/").at(-1) === "signup" ? "Register" : "Sign In")

  useEffect(() => {
    setTitle(pathname.split("/").at(-1) === "signin" ? "Sign In" : "Register")
  }, [pathname])
  return (
    <Container>
      <h1>{title}</h1>
      <Outlet />
    </Container>
  )
}

export default AuthPage