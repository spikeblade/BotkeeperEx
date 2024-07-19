'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('transactions', [{
      accountId : 1,
      type: 'credit',
      amount: 10.50,
      dateTime: new Date(),
    }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('transactions', null, {})
  }
};
