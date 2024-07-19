import { z } from 'zod'

export const TransactionScheme = z.object({
  id: z.number().optional(),
  accountId : z.number(),
  type: z.enum(['debit','credit']),
  cost: z.number().optional(),
  amount: z.number().optional(),
  dateTime: z.date().optional(),
})

export type Transaction = z.infer<typeof TransactionScheme>