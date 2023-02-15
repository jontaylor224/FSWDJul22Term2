import { createContext, useContext, useEffect, useReducer } from "react"
import { api, setAuthToken } from "../utils/apiConfig"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialState = {
  isAuthenticated: undefined,
  user: null,
  token: null
}

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      }
    default:
      return state
  }
}

const authContext = createContext()

export const ProvideAuth = ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, initialState)
  return (
    <authContext.Provider value={{ auth, dispatch }}>
      {children}
    </authContext.Provider>
  )
}

const useAuth = () => {
  const { auth: { isAuthenticated, user }, dispatch } = useContext(authContext)

  const navigate = useNavigate()

  const signUp = (
    username,
    password,
    confirmPassword
  ) => {
    api.post('/auth/signup', { username, password, confirmPassword })
      .then(res => {
        dispatch({
          type: "LOGIN",
          payload: res
        })
        setAuthToken(res.token)
        sessionStorage.setItem('kboxu', res.token)
        toast.success(`Welcome, ${username}!`)
        navigate(`/box/${res.user._id}`)
      })
      .catch(err => toast.error("Invalid submission."))
  }

  const signIn = (username, password) => {
    api.post('/auth/signin', { username, password })
      .then(res => {
        dispatch({
          type: "LOGIN",
          payload: res
        })
        setAuthToken(res.token)
        sessionStorage.setItem('kboxu', res.token)
        toast.success(`Welcome, ${username}!`)
        navigate(`/box/${res.user._id}`)
      })
      .catch(err => toast.error("Invalid submission."))
  }

  const signOut = () => {
    setAuthToken()
    dispatch({
      type: "LOGOUT"
    })
    navigate('/')
  }

  useEffect(() => {
    if (isAuthenticated === undefined) {
      let cookieValue = sessionStorage.getItem('kboxu')
      setAuthToken(cookieValue)
      api.get('/auth/authenticate')
        .then(res => dispatch({ type: "LOGIN", payload: res }))
        .catch(_ => dispatch({ type: "LOGOUT" }))
    }
  }, [])

  return {
    isAuthenticated,
    user,
    signUp,
    signIn,
    signOut
  }
}

export default useAuth