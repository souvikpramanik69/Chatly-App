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
exports.jwtMiddleware = void 0;
const ApiResponse_1 = require("../res/ApiResponse");
const jwtVerify_1 = require("../utils/jwtVerify");
const user_1 = require("../models/user");
const jwtMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const authHeader = (_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        if (!authHeader) {
            return res.status(401).json((0, ApiResponse_1.ApiResponse)({
                message: "Missing Authorization Header",
                status: 400,
                success: false
            }));
        }
        const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json((0, ApiResponse_1.ApiResponse)({
                message: "Unautorized",
                status: 401,
                success: false
            }));
        }
        const tokenData = (0, jwtVerify_1.jwtVerify)(String(token));
        const user = yield user_1.userModel.findOne({ where: {
                email: String(tokenData === null || tokenData === void 0 ? void 0 : tokenData.email)
            }, attributes: { exclude: ["password", "createdAt", "updatedAt"] } });
        if (!user) {
            return res.status(401).json((0, ApiResponse_1.ApiResponse)({
                message: "Unautorized",
                status: 401,
                success: false
            }));
        }
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(500).json((0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false
        }));
    }
});
exports.jwtMiddleware = jwtMiddleware;
//# sourceMappingURL=jwt.middleware.js.map