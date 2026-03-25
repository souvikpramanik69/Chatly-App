import { Sequelize } from "sequelize";
import { applyAssociations } from "../models/associations";
require('dotenv').config()
export const sequelize = new Sequelize(String(process.env.DB_URL));
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // applyAssociations();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
// 

