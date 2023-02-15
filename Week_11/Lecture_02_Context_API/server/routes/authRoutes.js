import { Router } from "express";
import { authenticate, signIn, signUp } from "../controllers/authController";
import requireAuth from "../middleware/requireAuth";

const authRoutes = Router();

authRoutes.post("/signup", signUp);
authRoutes.post("/signin", signIn);
authRoutes.get("/authenticate", requireAuth, authenticate);

export default authRoutes;
