import { Sequelize } from "sequelize";
require('dotenv').config()
export const sequelize = new Sequelize(String(process.env.DB_URL));
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
// 

