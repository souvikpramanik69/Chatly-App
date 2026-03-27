"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const jwt_middleware_1 = require("../middlewares/jwt.middleware");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get("/users", jwt_middleware_1.jwtMiddleware, user_controller_1.userController);
exports.userRouter.get("/profile", jwt_middleware_1.jwtMiddleware, user_controller_1.userProfileController);
// userRouter.get("/users",userController);
// userRouter.get("/profile",userProfileController);
//# sourceMappingURL=user.route.js.map