import { Router } from "express";
import {
  createHobby,
  deleteHobby,
  getAllHobbies,
  getHobbyDetails,
  joinHobby,
  leaveHobby,
} from "../../controllers/hobbyController";
import requireAuth from "../../middleware/requireAuth";

const hobbiesRoutes = Router();

hobbiesRoutes.route("/").get(getAllHobbies).post(requireAuth, createHobby);

hobbiesRoutes
  .route("/:hobbyId")
  .get(getHobbyDetails)
  .delete(requireAuth, deleteHobby);

hobbiesRoutes.get("/:hobbyId/join", requireAuth, joinHobby);
hobbiesRoutes.get("/:hobbyId/leave", requireAuth, leaveHobby);

export default hobbiesRoutes;
