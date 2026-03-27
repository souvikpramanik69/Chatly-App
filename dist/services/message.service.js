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
exports.getMessageByRoomIdService = void 0;
const ApiResponse_1 = require("../res/ApiResponse");
const Message_1 = require("../models/Message");
const getMessageByRoomIdService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { room_id } = req === null || req === void 0 ? void 0 : req.query;
        const messages = yield Message_1.messageModel.findAndCountAll({
            where: {
                room_id: room_id,
            },
        });
        return (0, ApiResponse_1.ApiResponse)({
            message: "All message retrieved successfully",
            status: 200,
            success: true,
            data: messages,
        });
    }
    catch (err) {
        return (0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: true,
        });
    }
});
exports.getMessageByRoomIdService = getMessageByRoomIdService;
//# sourceMappingURL=message.service.js.map