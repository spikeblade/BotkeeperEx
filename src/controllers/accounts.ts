import { type Account } from '../interfaces/IAccountType'
import {account} from '../../models/account'



export const getBalanceOfAccount = async (id:number): Promise<any> => {
    const resAccount = await account.findOne({where: { id },
        attributes: ['balance']})
    return resAccount
}

export const updateBalance = async (id:number, value: number): Promise<any> => {
    const resAccount = await account.update({ balance: value }, {
        where: {
          id
        },
        fields: ['balance']
      })
    return resAccount
}