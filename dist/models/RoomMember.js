"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomMemberModel = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
exports.roomMemberModel = dbConfig_1.sequelize.define("RoomMembers", {
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
    },
    user_id: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    room_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.DataTypes.ENUM("admin", "member"),
        allowNull: false,
        defaultValue: "member",
    },
    joined_at: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    indexes: [
        {
            fields: ["role"],
        },
        {
            fields: ["user_id"],
        },
        {
            fields: ["room_id"],
        },
    ],
    createdAt: false,
    updatedAt: false
});
//# sourceMappingURL=RoomMember.js.map