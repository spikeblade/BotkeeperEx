import { type Transaction } from '../interfaces/IAccountTransactionType'
import { transaction } from '../../models/transaction'
import * as accounts from './accounts'
import * as valuesUtils from '../utils/valuesUtil'
import { Op } from 'sequelize'

export const listTransactions = async (): Promise<any> => {
    const resTransactions = await transaction.findAll()
    return resTransactions
}

export const getTransactionById = async (id: number): Promise<any> => {
    const resTransactions = await transaction.findOne({ where: { id } })
    return resTransactions
}

export const getTransactionsBetween = async (min: number, max: number,): Promise<any> => {
    const resTransactions = await transaction.findAll({
        where: {
            [Op.or]: {
                cost: {
                    [Op.gt]: min,
                    [Op.lte]: max,
                },
                amount: {
                    [Op.gt]: min,
                    [Op.lte]: max,
                }
            }
        }
    })
    return resTransactions
}


export const newTransaction = async (data: Transaction): Promise<any> => {
    const { type, accountId, amount, cost } = data
    const balance = await accounts.getBalanceOfAccount(accountId);
    let total = 0
    if (type === 'credit') {
        total = balance + valuesUtils.normalized(amount)
    } else {
        total = balance - valuesUtils.normalized(cost)
    }
    if (total >= 0) {
        await accounts.updateBalance(accountId, total)
        const resTransaction = await transaction.create(data)
        return resTransaction
    }
    return 'error not enough money for this transaction'
}