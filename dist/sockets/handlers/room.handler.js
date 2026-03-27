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
exports.roomHanlder = void 0;
const roomHanlder = ({ io, socket }) => {
    socket.on("join-room", (data) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        console.log("Room id from socket ", data);
        if (data === null || data === void 0 ? void 0 : data.id) {
            socket.leave((_a = socket === null || socket === void 0 ? void 0 : socket.data) === null || _a === void 0 ? void 0 : _a.roomId);
        }
        socket.join(data === null || data === void 0 ? void 0 : data.id);
        console.log("Room connectdd ");
        socket.data.roomId = data === null || data === void 0 ? void 0 : data.id;
    }));
};
exports.roomHanlder = roomHanlder;
//# sourceMappingURL=room.handler.js.map