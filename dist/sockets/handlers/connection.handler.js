"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionHandler = void 0;
const message_handler_1 = require("./message.handler");
const room_handler_1 = require("./room.handler");
const connectionHandler = ({ socket, io }) => {
    (0, room_handler_1.roomHanlder)({ io, socket });
    (0, message_handler_1.messageHandler)({ io, socket });
};
exports.connectionHandler = connectionHandler;
//# sourceMappingURL=connection.handler.js.map