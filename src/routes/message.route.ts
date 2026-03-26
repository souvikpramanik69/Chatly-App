import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.middleware";
import { getAllMessageController } from "../controllers/message.controller";

export const messageRouter = Router();

messageRouter.get("/messages", jwtMiddleware, getAllMessageController);
