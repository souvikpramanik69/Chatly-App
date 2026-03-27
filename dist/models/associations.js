"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAssociations = void 0;
const Message_1 = require("./Message");
const room_1 = require("./room");
const RoomMember_1 = require("./RoomMember");
const user_1 = require("./user");
const applyAssociations = () => {
    // Many-to-Many (Users ↔ Rooms)
    room_1.roomModel.belongsToMany(user_1.userModel, {
        through: RoomMember_1.roomMemberModel,
        foreignKey: "room_id",
        otherKey: "user_id",
        as: "users",
    });
    user_1.userModel.belongsToMany(room_1.roomModel, {
        through: RoomMember_1.roomMemberModel,
        foreignKey: "user_id",
        otherKey: "room_id",
        as: "rooms",
    });
    // Room → Messages
    room_1.roomModel.hasMany(Message_1.messageModel, {
        foreignKey: "room_id",
    });
    Message_1.messageModel.belongsTo(room_1.roomModel, {
        foreignKey: "room_id",
    });
    // User → Messages (sender)
    user_1.userModel.hasMany(Message_1.messageModel, {
        foreignKey: "sender_id",
    });
    Message_1.messageModel.belongsTo(user_1.userModel, {
        foreignKey: "sender_id",
    });
};
exports.applyAssociations = applyAssociations;
//# sourceMappingURL=associations.js.map