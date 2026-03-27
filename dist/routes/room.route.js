"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRouter = void 0;
const express_1 = require("express");
const room_controller_1 = require("../controllers/room.controller");
exports.roomRouter = (0, express_1.Router)();
exports.roomRouter.post("/room", room_controller_1.addRoomController);
exports.roomRouter.get("/rooms", room_controller_1.getAllRoomController);
//# sourceMappingURL=room.route.js.map