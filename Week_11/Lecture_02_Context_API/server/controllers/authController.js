import createHttpError from "http-errors";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../configs/secrets";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    const userInDb = await User.findOne({ email });

    if (userInDb) {
      throw createHttpError(422, { name: "DuplicateEmailError" });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    const tokenPayload = { sub: user._id, email };

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, ...tokenPayload });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const err = { error: "Validation error", errors: {} };
      if (!email) {
        err.errors.email = "Email is required.";
      }
      if (!password) {
        err.errors.password = "Password is required.";
      }

      return res.status(422).json(err);
    }

    const userInDb = await User.findOne({ email });

    if (!userInDb) {
      return res.status(422).json({
        error: "Validation error",
        errors: { email: "Incorrect email and/or password." },
      });
    }

    const passwordsMatch = bcrypt.compareSync(password, userInDb.passwordHash);
    if (!passwordsMatch) {
      return res.status(422).json({
        error: "Validation error",
        errors: { email: "Incorrect email and/or password." },
      });
    }

    const tokenPayload = { sub: userInDb._id, email };

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, ...tokenPayload });
  } catch (error) {
    next(error);
  }
};

export const authenticate = async (req, res, next) => {
  try {
    let token = req.get("authorization");

    token = token.replace("Bearer ", "");
    const tokenPayload = { sub: req.user._id, email: req.user.email };

    res.json({ token, ...tokenPayload });
  } catch (error) {
    next(error);
  }
};
