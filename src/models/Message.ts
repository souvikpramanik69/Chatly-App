import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig";

export const messageModel = sequelize.define(
  "Messages",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    room_id: {
      type: DataTypes.STRING,
    },
    sender_id: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.TEXT,
    },
    type: {
      type: DataTypes.ENUM("text", "image", "file"),
      allowNull: false,
      defaultValue: "text",
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    indexes: [
      {
        fields: ["message"],
      },

      {
        fields: ["id"],
      },
    ],
  },
);
