"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class account extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/db` file will call this method automatically.
         */
        static associate(models) {
            account.hasMany(models.transaction, {
                foreignKey: 'accountId'
            });
        }
    }
    account.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        accountOwner: {
            allowNull: false,
            type: DataTypes.STRING
        },
        balance: {
            allowNull: false,
            defaultValue: 0,
            type: DataTypes.FLOAT
        }
    }, {
        tableName: 'accounts',
        timestamps: false,
        sequelize
    });
    return account;
};
