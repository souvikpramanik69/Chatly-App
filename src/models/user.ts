import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig";

export const  userModel = sequelize.define('Users',{
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
},{
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
})