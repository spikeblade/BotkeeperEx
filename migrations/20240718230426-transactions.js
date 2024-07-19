'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {})
    await queryInterface.addColumn('transactions', 'id',
      {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      }
    )
    await queryInterface.addColumn('transactions', 'accountId',
      {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
      }
    )
    queryInterface.addConstraint('transactions', {
      fields: ['accountId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name',
      references: { //Required field
        table: 'accounts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addColumn('transactions', 'type',
      {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
    )
    await queryInterface.addColumn('transactions', 'cost',
      {
        allowNull: true,
        type: Sequelize.DataTypes.FLOAT
      }
    )
    await queryInterface.addColumn('transactions', 'amount',
      {
        allowNull: true,
        type: Sequelize.DataTypes.FLOAT
      }
    )
    await queryInterface.addColumn('transactions', 'dateTime',
      {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    )
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('accounts')
  }
}

