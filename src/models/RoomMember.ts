import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig";

export const roomMemberModel = sequelize.define(
  "RoomMembers",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    room_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "member"),
      allowNull: false,
      defaultValue: "member",
    },
    joined_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
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
    createdAt:false,
    updatedAt:false
    
  },
  
);
