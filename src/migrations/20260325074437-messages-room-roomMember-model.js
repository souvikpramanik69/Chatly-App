"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rooms", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM("public", "private"),
        allowNull: false,
        defaultValue: "private",
      },
      created_by: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }); 
    
    await queryInterface.createTable("RoomMembers", {
      id: {
        allowNull: false,
        primaryKey: true,
        type:DataTypes.STRING
      },  
      
      user_id: {
        allowNull: false,
        type:DataTypes.STRING
      },
      room_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role:{
        type: Sequelize.ENUM("admin", "member"),
        allowNull: false,
        defaultValue: "member",
      },
      joined_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("Messages", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      room_id: {
        type: Sequelize.STRING,
      },
      sender_id: {
        type: Sequelize.STRING,
      },
      message: {
        type: DataTypes.TEXT,
      },
      type: {
        type: Sequelize.ENUM("text", "image", "file"),
        allowNull: false,
        defaultValue: "text",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Messages");
  },
};
