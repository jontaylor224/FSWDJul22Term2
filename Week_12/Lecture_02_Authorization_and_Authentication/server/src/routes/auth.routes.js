import { Router } from "express";
import {
  retrieveSession,
  loginUser,
  registerUser,
  deleteSession,
} from "../controllers/auth.controller";
import { deserializeCookie } from "../middleware";
import requireAuth from "../middleware/requireAuth";

const authRouter = Router();

authRouter.post("/signup", registerUser);
authRouter.post("/signin", loginUser);
authRouter
  .route("/session")
  .get(deserializeCookie, retrieveSession)
  .delete(requireAuth, deleteSession);

export default authRouter;
