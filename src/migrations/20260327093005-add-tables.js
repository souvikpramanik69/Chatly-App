'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id: {
        type: DataTypes.STRING
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: Sequelize.STRING
      }, 
      password: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });

      await queryInterface.createTable("Rooms", {
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
            type: DataTypes.STRING,
            allowNull: false,
          },
          role:{
            type: DataTypes.ENUM("admin", "member"),
            allowNull: false,
            defaultValue: "member",
          },
          joined_at: {
            allowNull: false,
            type: DataTypes.DATE,
          },
        });
    
        await queryInterface.createTable("Messages", {
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
          },
    
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
        });

    


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
      await queryInterface.dropTable("Rooms");
      await queryInterface.dropTable("RoomMembers");
      await queryInterface.dropTable("Messages");
  }
};
