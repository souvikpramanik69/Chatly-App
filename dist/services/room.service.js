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
exports.getAllRooms = exports.addRoomService = void 0;
const RoomMember_1 = require("../models/RoomMember");
const ApiResponse_1 = require("../res/ApiResponse");
const uuid_1 = require("uuid");
const room_1 = require("../models/room");
const user_1 = require("../models/user");
const addRoomService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { senderId, receiverId } = req.body;
        const roomId = [senderId, receiverId].sort().join("_");
        // ✅ Check first
        const isRoomExist = yield room_1.roomModel.findOne({
            where: { id: roomId },
        });
        if (isRoomExist) {
            return (0, ApiResponse_1.ApiResponse)({
                message: "Room already exist",
                status: 409,
                success: false,
            });
        }
        const [room] = yield room_1.roomModel.findOrCreate({
            where: { id: roomId },
            defaults: {
                id: roomId,
                name: `chat-${roomId}`,
                type: "private",
                created_by: senderId,
            },
        });
        // 2. add members
        yield RoomMember_1.roomMemberModel.bulkCreate([
            { id: (0, uuid_1.v4)(), room_id: roomId, user_id: senderId },
            { id: (0, uuid_1.v4)(), room_id: roomId, user_id: receiverId },
        ], { ignoreDuplicates: true });
        // 3. fetch with members
        const result = yield room_1.roomModel.findOne({
            where: { id: roomId },
            include: [
                {
                    model: user_1.userModel,
                    as: "users",
                    attributes: ["id", "firstName", "lastName"], // adjust fields
                    through: {
                        attributes: [], // hide roomMember table
                    },
                },
            ],
        });
        return (0, ApiResponse_1.ApiResponse)({
            message: "Room has been created successfully",
            status: 200,
            success: true,
            data: result,
        });
    }
    catch (err) {
        return (0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false,
        });
    }
});
exports.addRoomService = addRoomService;
const getAllRooms = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.query;
        const data = yield room_1.roomModel.findAndCountAll({
            include: [
                {
                    model: user_1.userModel,
                    as: "users",
                    attributes: ["id", "firstName", "lastName"],
                    through: { attributes: [] },
                },
            ],
            distinct: true,
        });
        return (0, ApiResponse_1.ApiResponse)({
            message: "Rooms fetched successfully",
            status: 200,
            success: true,
            data,
        });
    }
    catch (err) {
        return (0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false,
        });
    }
});
exports.getAllRooms = getAllRooms;
//# sourceMappingURL=room.service.js.map