import { Router } from 'express'
import { authCheck, signIn, signOut, signUp } from '../controllers/auth.controller'
import requireAuth from '../middleware/requireAuth'

const authRoutes = Router()

authRoutes.post('/signup', signUp)
authRoutes.post('/signin', signIn)
authRoutes.all('/authenticate', requireAuth, authCheck)
authRoutes.all('/signout', signOut)


export default authRoutes