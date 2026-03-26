'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // your logic (if any)
  },

  async down (queryInterface, Sequelize) {
    // delete all data from roomMemberModel first (important!)
    await queryInterface.bulkDelete('roomMemberModels', null, {});

    // then delete from roomModel
    await queryInterface.bulkDelete('roomModels', null, {});
  }
};