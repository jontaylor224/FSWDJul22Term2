import { Router } from "express";
import { api_url } from "../config/api.config";
import { auth_url } from "../config/auth.config";
import apiRouter from "./api.routes";
import authRouter from "./auth.routes";

const router = Router();

// router.use(api_url, apiRouter);
router.use(auth_url, authRouter);

export default router;
