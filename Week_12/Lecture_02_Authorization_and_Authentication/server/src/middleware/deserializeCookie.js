import { verify } from "jsonwebtoken";
import { refresh_token_secret } from "../config/auth.config";

const deserializeCookie = (req, res, next) => {
  // 1. Get the refresh token from the cookie
  const refreshToken = req.cookies["kaauth"];
  // 2. Verify it is a valid refresh token
  verify(refreshToken, refresh_token_secret, (err, payload) => {
    if (err) {
      return next();
    }
    // 3. Pass that token along
    req.cookiePayload = payload;
    req.refreshToken = refreshToken;

    next();
  });
};

export default deserializeCookie;
