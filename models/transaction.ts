import { Model } from 'sequelize'
module.exports = (sequelize: any, DataTypes: { INTEGER: any, STRING: any, NOW: any, DATE: any, FLOAT: any }) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/db` file will call this method automatically.
     */
    static associate (models: any): any {
      transaction.belongsTo(models.account, {
        foreignKey: 'accountId'
      })
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
  })
  return transaction
}

