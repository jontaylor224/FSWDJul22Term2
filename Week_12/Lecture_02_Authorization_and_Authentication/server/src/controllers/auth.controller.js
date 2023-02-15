import {
  refresh_cookie_max_age,
  refresh_token_ttl,
} from "../config/auth.config";
import {
  authenticateSessionByRefreshToken,
  authenticateUser,
} from "../services/auth.service";
import { deleteSessionByUser } from "../services/session.service";
import { insertUser } from "../services/user.service";

export const registerUser = async (req, res, next) => {
  try {
    // 1. Create the user
    await insertUser(req.body);
    // 2. Return "OK"
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    // 1. Authenticate the user
    const { accessToken, refreshToken, user } = await authenticateUser(
      req.body
    );
    // 2. Set the refresh token as an http only cookie
    res.cookie("kaauth", refreshToken, {
      httpOnly: true,
      maxAge: refresh_cookie_max_age,
    });
    // 3. Return the access token
    res.status(200).json({ accessToken, user });
  } catch (error) {
    next(error);
  }
};

export const retrieveSession = async (req, res, next) => {
  try {
    console.log("retrieving session");
    if (!req.cookiePayload) {
      console.log("No cookie payload");
      return res.status(200).json({ message: "No session" });
    }

    const response = await authenticateSessionByRefreshToken(
      req.cookiePayload,
      req.refreshToken
    );

    res.json(response);
  } catch (error) {
    next(error);
  }
};

export const deleteSession = async (req, res, next) => {
  try {
    console.log(req.user);
    await deleteSessionByUser(req.user._id);
    res.clearCookie("kaauth");
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
