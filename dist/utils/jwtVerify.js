"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;
const jwtVerify = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, String(jwtSecret));
        return decoded;
    }
    catch (err) {
        return null;
    }
};
exports.jwtVerify = jwtVerify;
//# sourceMappingURL=jwtVerify.js.map