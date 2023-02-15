import { Router } from "express";
import hobbiesRoutes from "./hobbiesRoutes";
import usersRoutes from "./usersRoutes";

const apiRoutes = Router();

apiRoutes.use("/hobbies", hobbiesRoutes);
apiRoutes.use("/users", usersRoutes);

export default apiRoutes;
