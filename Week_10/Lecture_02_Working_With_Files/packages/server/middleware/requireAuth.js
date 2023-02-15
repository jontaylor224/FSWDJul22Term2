import jwt from 'jsonwebtoken'
import User from '../models/user'
import { JWT_SECRET } from '../configs/constants'

const requireAuth = async (req, res, next) => {
  const authorization = req.get('authorization')
  console.log(authorization)

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in" })
  }
  const token = authorization.replace("Bearer ", "")

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'you must be logged in' })
    }

    const { uid } = payload

    User.findById(uid)
      .then(udata => {
        req.user = udata
        next()
      })
  })
}

export default requireAuth