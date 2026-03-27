'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        id: 1,
        firstName: 'Amit',
        lastName: 'Sharma',
        email: 'amit.sharma@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstName: 'Priya',
        lastName: 'Verma',
        email: 'priya.verma@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstName: 'Rahul',
        lastName: 'Yadav',
        email: 'rahul.yadav@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        firstName: 'Sneha',
        lastName: 'Iyer',
        email: 'sneha.iyer@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        firstName: 'Arjun',
        lastName: 'Reddy',
        email: 'arjun.reddy@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        firstName: 'Neha',
        lastName: 'Gupta',
        email: 'neha.gupta@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        firstName: 'Vikram',
        lastName: 'Singh',
        email: 'vikram.singh@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        firstName: 'Anjali',
        lastName: 'Mehta',
        email: 'anjali.mehta@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        firstName: 'Karan',
        lastName: 'Patel',
        email: 'karan.patel@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        firstName: 'Pooja',
        lastName: 'Nair',
        email: 'pooja.nair@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        firstName: 'Rohit',
        lastName: 'Das',
        email: 'rohit.das@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        firstName: 'Meera',
        lastName: 'Kulkarni',
        email: 'meera.kulkarni@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        firstName: 'Suresh',
        lastName: 'Pillai',
        email: 'suresh.pillai@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        firstName: 'Kavita',
        lastName: 'Joshi',
        email: 'kavita.joshi@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        firstName: 'Deepak',
        lastName: 'Chatterjee',
        email: 'deepak.chatterjee@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        firstName: 'Swati',
        lastName: 'Bose',
        email: 'swati.bose@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        firstName: 'Manish',
        lastName: 'Agarwal',
        email: 'manish.agarwal@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        firstName: 'Ritu',
        lastName: 'Saxena',
        email: 'ritu.saxena@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        firstName: 'Nikhil',
        lastName: 'Mishra',
        email: 'nikhil.mishra@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        firstName: 'Ayesha',
        lastName: 'Khan',
        email: 'ayesha.khan@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      id: {
        [Sequelize.Op.in]: Array.from({ length: 20 }, (_, i) => i + 1)
      }
    }, {});
  }
};