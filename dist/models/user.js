"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
exports.userModel = dbConfig_1.sequelize.define('Users', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['email']
        },
        {
            unique: true,
            fields: ['id']
        },
        {
            fields: ['firstName']
        },
        {
            fields: ['lastName']
        }
    ]
});
//# sourceMappingURL=user.js.map