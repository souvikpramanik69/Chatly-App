"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;
const generateAccessToken = (payload) => {
    if (!payload)
        return;
    const token = jsonwebtoken_1.default.sign(payload, String(jwtSecret), { expiresIn: '1d' });
    return token;
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (payload) => {
    if (!payload)
        return;
    const token = jsonwebtoken_1.default.sign(payload, String(jwtSecret), { expiresIn: '30d' });
    return token;
};
exports.generateRefreshToken = generateRefreshToken;
//# sourceMappingURL=generateTokes.js.map