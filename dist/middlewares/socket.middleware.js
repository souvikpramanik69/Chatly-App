"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketMiddleware = void 0;
const server_1 = require("../server");
const socketMiddleware = () => {
    server_1.io.use((socket, next) => {
        try {
            // const token = socket.handshake.auth.token;
            // const decoded: any = jwtVerify(token);
            // socket.data.userId = decoded.id; 
            console.log("Socket middleware runing");
            next();
        }
        catch (err) {
            next(new Error("Unauthorized"));
        }
    });
};
exports.socketMiddleware = socketMiddleware;
//# sourceMappingURL=socket.middleware.js.map