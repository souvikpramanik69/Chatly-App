import { messageModel } from "./Message";
import { roomModel } from "./room";
import { roomMemberModel } from "./RoomMember";
import { userModel } from "./user";


export const applyAssociations = () => {
  // Many-to-Many (Users ↔ Rooms)
  userModel.belongsToMany(roomModel, {
    through: roomMemberModel,
    foreignKey: 'user_id',
  });

  roomModel.belongsToMany(userModel, {
    through: roomMemberModel,
    foreignKey: 'room_id',
  });

  // Room → Messages
  roomModel.hasMany(messageModel, {
    foreignKey: 'room_id',
  });

  messageModel.belongsTo(roomModel, {
    foreignKey: 'room_id',
  });

  // User → Messages (sender)
  userModel.hasMany(messageModel, {
    foreignKey: 'sender_id',
  });

  messageModel.belongsTo(userModel, {
    foreignKey: 'sender_id',
  });
};