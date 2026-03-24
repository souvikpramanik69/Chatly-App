'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       const users = [];

    for (let i = 1; i <= 100; i++) {
      users.push({
        id: i.toString(), // ⚠️ keep string if your column is string
        firstName: `User${i}`,
        lastName: `Test${i}`,
        email: `admin${i}@example.com`,
        password: "admin@123", // ⚠️ hash in real apps
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert("Users", users);
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Users', null, {})
  }
};
