"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const jwt_middleware_1 = require("../middlewares/jwt.middleware");
const message_controller_1 = require("../controllers/message.controller");
exports.messageRouter = (0, express_1.Router)();
exports.messageRouter.get("/messages", jwt_middleware_1.jwtMiddleware, message_controller_1.getAllMessageController);
//# sourceMappingURL=message.route.js.map