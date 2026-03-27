"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const root_route_1 = __importDefault(require("./routes/root.route"));
require("./config/dbConfig");
const morgan_1 = __importDefault(require("morgan"));
const user_route_1 = require("./routes/user.route");
const auth_route_1 = require("./routes/auth.route");
const room_route_1 = require("./routes/room.route");
const message_route_1 = require("./routes/message.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
//Routers ---
app.use(root_route_1.default);
app.use(user_route_1.userRouter);
app.use(auth_route_1.authRouter);
app.use(room_route_1.roomRouter);
app.use(message_route_1.messageRouter);
exports.default = app;
//# sourceMappingURL=app.js.map