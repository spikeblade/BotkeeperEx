import { z } from 'zod'

export const AccountScheme = z.object({
  id: z.number().optional(),
  accountOwner: z.string().optional(),
  balance: z.number().optional()
})

export type Account = z.infer<typeof AccountScheme>