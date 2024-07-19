import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import { type Account } from '../src/interfaces/IAccountType'

class account
    extends Model<Account, Account>
    implements Account {
    public accountOwner!: string
    public balance!: number
}

account.init(
    {
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
            type: DataTypes.FLOAT
        }
    },
    {
        sequelize,
        modelName: 'account',
        tableName: 'accounts',
        timestamps: false,
    },
);

export { account }