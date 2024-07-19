"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class transaction extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/db` file will call this method automatically.
         */
        static associate(models) {
            transaction.belongsTo(models.account, {
                foreignKey: 'accountId'
            });
        }
    }
    transaction.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        accountId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING
        },
        cost: {
            allowNull: true,
            type: DataTypes.FLOAT
        },
        amount: {
            allowNull: true,
            type: DataTypes.FLOAT
        },
        dateTime: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'transactions',
        timestamps: false,
        sequelize
    });
    return transaction;
};
