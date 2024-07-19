import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import { type Transaction } from '../src/interfaces/IAccountTransactionType'

class transaction
  extends Model<Transaction, Transaction>
  implements Transaction {
  public type!: any
  public accountId!: number
  public cost!: number
  public amount!: number
  public dateTime!: Date
}

transaction.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    accountId: {
      allowNull: false,
      type: DataTypes.INTEGER
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
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE
    }

  },
  {
    sequelize,
    modelName: 'transaction',
    tableName: 'transactions',
    timestamps: false,
  },
);

export { transaction }
