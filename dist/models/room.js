"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomModel = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
exports.roomModel = dbConfig_1.sequelize.define('Rooms', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("public", "private"),
        allowNull: false,
        defaultValue: "private",
    },
    created_by: {
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    indexes: [
        {
            fields: ['name']
        },
        {
            fields: ['id']
        },
    ]
});
//# sourceMappingURL=room.js.map