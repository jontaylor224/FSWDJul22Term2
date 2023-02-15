import { verify } from "jsonwebtoken";
import { access_token_secret } from "../config/auth.config";
import { fetchSessionByAccessToken } from "../services/session.service";
import { fetchUserByEmail } from "../services/user.service";

const requireAuth = (req, res, next) => {
  const auth = req.get("authorization");

  if (!auth) {
    return next({ name: "UnauthorizedError" });
  }
  const token = auth.replace("Bearer ", "");

  verify(token, access_token_secret, (err, payload) => {
    if (err) {
      return next({ name: "UnauthorizedError" });
    }

    fetchSessionByAccessToken(token).then((session) => {
      if (!session || !session.isActive) {
        return next({ name: "UnauthorizedError" });
      } else if (!session.user._id.equals(payload.sub)) {
        return next({ name: "UnauthorizedError" });
      }

      req.user = session.user;
      next();
    });
  });
};

export default requireAuth;
