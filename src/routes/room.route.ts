import { Router } from "express";
import { addRoomController, getAllRoomController } from "../controllers/room.controller";

export const roomRouter = Router();

roomRouter.post("/room", addRoomController);
roomRouter.get("/rooms", getAllRoomController);