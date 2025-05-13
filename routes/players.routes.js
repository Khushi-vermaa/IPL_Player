import {
  createPlayer,
  getAllPlayers,
  updatePlayerDeatils,
  deletePlayer,
  getplayerDescription,
} from "../controllers/players.controllers.js";
import { playerSchema, updateSchema } from "../utils/validateSchema.js";
import validateSchema from "../middlewares/validate.js";
import express from "express";
const router = express.Router();
router.post("/players", validateSchema(playerSchema), createPlayer);
router.get("/players", getAllPlayers);
router.get("/players/:id/description", getplayerDescription);
router.put("/players/:id", validateSchema(updateSchema), updatePlayerDeatils);
router.delete("/players/:id", deletePlayer);

export default router;
