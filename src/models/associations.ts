import { messageModel } from "./Message";
import { roomModel } from "./room";
import { roomMemberModel } from "./RoomMember";
import { userModel } from "./user";


export const applyAssociations = () => {
  // Many-to-Many (Users ↔ Rooms)
roomModel.belongsToMany(userModel, {
  through: roomMemberModel,
  foreignKey: "room_id",
  otherKey: "user_id",
  as: "users"
});

userModel.belongsToMany(roomModel, {
  through: roomMemberModel,
  foreignKey: "user_id",
  otherKey: "room_id",
  as: "rooms"
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