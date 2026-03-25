import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig";

export const  roomModel = sequelize.define('Rooms',{
   id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM("public", "private"),
        allowNull: false,
        defaultValue: "private",
      },
      created_by: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
},{
  indexes: [
    {
      fields: ['name']
    },    
    
    {
      fields: ['id']
    },
  ]
})