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
exports.loginService = void 0;
const ApiResponse_1 = require("../res/ApiResponse");
const user_1 = require("../models/user");
const generateTokes_1 = require("../utils/generateTokes");
const loginService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const data = yield user_1.userModel.findOne({ where: { email: email, password: password } });
        if (data == null) {
            return (0, ApiResponse_1.ApiResponse)({
                message: "User doesn't exist",
                status: 404,
                success: false,
            });
        }
        const accessToken = yield (0, generateTokes_1.generateAccessToken)({ email: data === null || data === void 0 ? void 0 : data.email, id: data === null || data === void 0 ? void 0 : data.id });
        const refreshToken = yield (0, generateTokes_1.generateRefreshToken)({ email: data === null || data === void 0 ? void 0 : data.email, id: data === null || data === void 0 ? void 0 : data.id });
        console.log("Access token ", accessToken);
        data.dataValues['access_token'] = accessToken;
        data.dataValues['refresh_token'] = refreshToken;
        return (0, ApiResponse_1.ApiResponse)({
            message: "User logged in successfully",
            status: 200,
            success: true,
            data: data
        });
    }
    catch (err) {
        return (0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false
        });
    }
});
exports.loginService = loginService;
//# sourceMappingURL=auth.service.js.map