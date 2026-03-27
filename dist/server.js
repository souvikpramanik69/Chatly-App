"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
require("./models/index.ts");
const socket_middleware_1 = require("./middlewares/socket.middleware");
const connection_handler_1 = require("./sockets/handlers/connection.handler");
const server = http_1.default.createServer(app_1.default);
require('dotenv').config();
const port = process.env.SERVER_PORT;
exports.io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
        // methods: ['GET', 'POST']
    }
});
(0, socket_middleware_1.socketMiddleware)();
exports.io.on("connection", (socket) => {
    (0, connection_handler_1.connectionHandler)({ socket, io: exports.io });
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=server.js.map