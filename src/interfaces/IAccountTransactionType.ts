import { z } from 'zod'

export const AccountScheme = z.object({
  id: z.number().optional(),
  accountId : z.number().optional(),
  type: z.enum(['debit','credit']),
  cost: z.number().optional(),
  amount: z.number().optional(),
  dateTime: z.date().optional(),
})

export type ProductFeatureValue = z.infer<typeof AccountScheme>