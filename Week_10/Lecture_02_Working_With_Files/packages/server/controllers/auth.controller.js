import User from "../models/user"
import bcrypt from "bcryptjs"
import { JWT_SECRET, MAX_AGE, SALT_ROUNDS } from "../configs/constants"
import jwt from "jsonwebtoken"

export const signUp = async (req, res, next) => {
  try {
    const { username, password, confirmPassword } = req.body

    const userInDb = await User.findOne({ username })

    if (userInDb) {
      return res.status(422).json({ username: "Username already in use." })
    }

    if (!password) {
      return res.status(422).json({ password: "Password is required." })
    } else if (password.length < 8) {
      return res.status(422).json({ password: "Password must be at least 8 characters." })
    } else if (password.length > 20) {
      return res.status(422).json({ password: "Password cannot be longer than 20 characters." })
    } else if (!confirmPassword) {
      return res.status(422).json({ confirmPassword: "Must confirm password." })
    } else if (password !== confirmPassword) {
      return res.status(422).json({ confirmPassword: "Passwords must match." })
    }

    const passwordHash = bcrypt.hashSync(password, SALT_ROUNDS)

    const user = await User.create({ username, passwordHash })

    const tokenPayload = {
      uid: user._id,
      username
    }

    const token = jwt.sign(tokenPayload, JWT_SECRET)

    res.cookie('kboxu', token, { maxAge: MAX_AGE, httpOnly: true })

    res.json({ token, user })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const userInDb = await User.findOne({ username })

    if (!userInDb) {
      return res.status(422).json({ error: "Invalid username/password" })
    }

    const passwordMatches = bcrypt.compareSync(password, userInDb.passwordHash)

    if (!passwordMatches) {
      return res.status(422).json({ error: "Invalid username/password" })
    }

    const token = jwt.sign({ uid: userInDb._id, username }, JWT_SECRET)

    res.cookie('kboxu', token, { maxAge: MAX_AGE, httpOnly: true })

    res.json({ token, user: userInDb })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const signOut = async (req, res, next) => {
  res.clearCookie('kboxu')
  res.end()
}

export const authCheck = async (req, res, next) => {
  const token = jwt.sign({ uid: req.user_id, username: req.user.username }, JWT_SECRET)

  res.json({ token, user: req.user })
}