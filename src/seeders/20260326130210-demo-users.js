'use strict';

const { v4 } = require('uuid');



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [
      {
        id: v4(),
        firstName: 'Amit',
        lastName: 'Sharma',
        email: 'amit.sharma@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Priya',
        lastName: 'Verma',
        email: 'priya.verma@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Rahul',
        lastName: 'Yadav',
        email: 'rahul.yadav@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Sneha',
        lastName: 'Iyer',
        email: 'sneha.iyer@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Arjun',
        lastName: 'Reddy',
        email: 'arjun.reddy@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Neha',
        lastName: 'Gupta',
        email: 'neha.gupta@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Vikram',
        lastName: 'Singh',
        email: 'vikram.singh@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Anjali',
        lastName: 'Mehta',
        email: 'anjali.mehta@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Karan',
        lastName: 'Patel',
        email: 'karan.patel@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Pooja',
        lastName: 'Nair',
        email: 'pooja.nair@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Rohit',
        lastName: 'Das',
        email: 'rohit.das@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Meera',
        lastName: 'Kulkarni',
        email: 'meera.kulkarni@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Suresh',
        lastName: 'Pillai',
        email: 'suresh.pillai@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Kavita',
        lastName: 'Joshi',
        email: 'kavita.joshi@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Deepak',
        lastName: 'Chatterjee',
        email: 'deepak.chatterjee@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Swati',
        lastName: 'Bose',
        email: 'swati.bose@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Manish',
        lastName: 'Agarwal',
        email: 'manish.agarwal@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Ritu',
        lastName: 'Saxena',
        email: 'ritu.saxena@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
        firstName: 'Nikhil',
        lastName: 'Mishra',
        email: 'nikhil.mishra@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: v4(),
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};