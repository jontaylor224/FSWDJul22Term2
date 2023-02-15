import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import { JWT_SECRET } from "../configs/secrets";
import User from "../models/User";

const requireAuth = (req, res, next) => {
  const auth = req.get("authorization");
  console.log(auth);

  if (!auth) {
    next(createHttpError(401, { name: "UnauthorizedError" }));
  }

  const token = auth.replace("Bearer ", "");

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      next(err);
    } else if (payload.exp < Date.now() / 1000) {
      console.log("huh?");
      next(createHttpError(401, { name: "UnauthorizedError" }));
    }

    console.log(payload);
    User.findOne({ email: payload.email }).then((u) => {
      if (!u) {
        next(createHttpError(401, { name: "UnauthorizedError" }));
      }
      req.user = u;
      next();
    });
  });
};

export default requireAuth;
