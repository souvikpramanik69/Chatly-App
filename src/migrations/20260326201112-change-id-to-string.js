'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.changeColumn("Users", "id", {
      type: Sequelize.STRING, // or Sequelize.UUID
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn("Users", "id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};
