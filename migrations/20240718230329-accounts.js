'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {})
    await queryInterface.addColumn('accounts', 'id',
      {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      }
    )
    await queryInterface.addColumn('accounts', 'accountOwner',
      {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    )
    await queryInterface.addColumn('accounts', 'balance',
      {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.DataTypes.FLOAT
      }
    )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('accounts')
  }
}
