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
exports.messageHandler = void 0;
const uuid_1 = require("uuid");
const Message_1 = require("../../models/Message");
const messageHandler = ({ io, socket }) => {
    socket.on("send-message", (payload, cb) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const roomId = (_a = socket === null || socket === void 0 ? void 0 : socket.data) === null || _a === void 0 ? void 0 : _a.roomId;
        const { message, roomDetails, typing, userId } = payload;
        console.log("Payload ", payload);
        if (message && roomDetails && userId) {
            yield Message_1.messageModel.create({
                id: (0, uuid_1.v4)(),
                room_id: roomDetails === null || roomDetails === void 0 ? void 0 : roomDetails.id,
                sender_id: userId,
                message: message,
                type: "text",
            });
        }
        const data = {
            message: message,
            typing,
            roomDetails,
        };
        socket.to(roomId).emit("receive_message", data);
        // cb({ status: 200, data: message });
    }));
    socket.on("new-room-create", (payload) => __awaiter(void 0, void 0, void 0, function* () {
        socket.emit("new-room-created", payload);
    }));
};
exports.messageHandler = messageHandler;
//# sourceMappingURL=message.handler.js.map