import { Router } from "express";
import { getUserDetails } from "../../controllers/userController";
import requireAuth from "../../middleware/requireAuth";

const usersRoutes = Router();

usersRoutes.get("/:userId", requireAuth, getUserDetails);

export default usersRoutes;
