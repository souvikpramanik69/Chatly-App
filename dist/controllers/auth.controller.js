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
exports.signupController = exports.loginController = void 0;
const ApiResponse_1 = require("../res/ApiResponse");
const auth_service_1 = require("../services/auth.service");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, auth_service_1.loginService)(req);
        return res.status(data === null || data === void 0 ? void 0 : data.payload.status).json(data);
    }
    catch (err) {
        return (0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false
        });
    }
});
exports.loginController = loginController;
const signupController = (req, res) => {
    try {
    }
    catch (err) {
        return (0, ApiResponse_1.ApiResponse)({
            message: String(err),
            status: 500,
            success: false
        });
    }
};
exports.signupController = signupController;
//# sourceMappingURL=auth.controller.js.map