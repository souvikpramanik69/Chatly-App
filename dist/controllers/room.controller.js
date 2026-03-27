"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRoomController = exports.addRoomController = void 0;
const room_service_1 = require("../services/room.service");
const ApiResponse_1 = require("../res/ApiResponse");
const addRoomController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield (0, room_service_1.addRoomService)(req);
        return res.status((_a = data === null || data === void 0 ? void 0 : data.payload) === null || _a === void 0 ? void 0 : _a.status).json(data);
        ``;
    }
    catch (err) {
        return res.status(500).json((0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false,
        }));
    }
});
exports.addRoomController = addRoomController;
const getAllRoomController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const data = yield (0, room_service_1.getAllRooms)(req);
        return res.status((_a = data === null || data === void 0 ? void 0 : data.payload) === null || _a === void 0 ? void 0 : _a.status).json(data);
        ``;
    }
    catch (err) {
        return res.status(500).json((0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false,
        }));
    }
});
exports.getAllRoomController = getAllRoomController;
//# sourceMappingURL=room.controller.js.map