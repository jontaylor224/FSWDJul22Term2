import { Router } from "express";
import { API_URL, AUTH_URL } from "../configs/api";
import { catchRoute } from "../controllers/errorController";
import apiRoutes from "./apiRoutes";
import authRoutes from "./authRoutes";

const router = Router();

router.use(API_URL, apiRoutes);
router.use(AUTH_URL, authRoutes);

router.all("*", catchRoute);

export default router;
