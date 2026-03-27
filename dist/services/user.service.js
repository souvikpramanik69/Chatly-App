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
exports.getUserProfile = exports.getAllUserService = void 0;
const user_1 = require("../models/user");
const ApiResponse_1 = require("../res/ApiResponse");
const sequelize_1 = require("sequelize");
const getAllUserService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Unwanted user id because i want to remove my name from my contact list by souvik
        const { unwanted_user_id } = req.query;
        const where = {};
        if (unwanted_user_id) {
            where.id = {
                [sequelize_1.Op.ne]: unwanted_user_id
            };
        }
        const { count, rows } = yield user_1.userModel.findAndCountAll({
            where: where,
        });
        return (0, ApiResponse_1.ApiResponse)({
            message: "Users fetched successfully",
            status: 200,
            success: true,
            data: {
                count: count,
                rows: rows,
            },
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
exports.getAllUserService = getAllUserService;
const getUserProfile = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req === null || req === void 0 ? void 0 : req.user;
        if (!userData) {
            return (0, ApiResponse_1.ApiResponse)({
                message: "User profile not found",
                status: 404,
                success: true,
            });
        }
        return (0, ApiResponse_1.ApiResponse)({
            message: "Users fetched successfully",
            status: 200,
            success: true,
            data: userData,
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
exports.getUserProfile = getUserProfile;
//# sourceMappingURL=user.service.js.map