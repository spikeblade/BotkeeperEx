'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('accounts', [{
      accountOwner: 'John Doe',
      balance: 10.50
    }], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null, {})
  }
};
