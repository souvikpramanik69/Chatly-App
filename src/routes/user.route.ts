import { Router } from "express";
import { userController,userProfileController } from "../controllers/user.controller";
import { jwtMiddleware } from "../middlewares/jwt.middleware";

export const userRouter = Router();

    userRouter.get("/users",jwtMiddleware,userController);
    userRouter.get("/profile",jwtMiddleware,userProfileController);

// userRouter.get("/users",userController);
// userRouter.get("/profile",userProfileController);