"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageModel = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
exports.messageModel = dbConfig_1.sequelize.define("Messages", {
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
    },
    room_id: {
        type: sequelize_1.DataTypes.STRING,
    },
    sender_id: {
        type: sequelize_1.DataTypes.STRING,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("text", "image", "file"),
        allowNull: false,
        defaultValue: "text",
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    indexes: [
        {
            fields: ["message"],
        },
        {
            fields: ["id"],
        },
    ],
});
//# sourceMappingURL=Message.js.map