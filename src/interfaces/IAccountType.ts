import { z } from 'zod'

export const AccountScheme = z.object({
  id: z.number().optional(),
  accountOwner: z.string().optional(),
  Balance: z.number().optional()
})

export type ProductFeatureValue = z.infer<typeof AccountScheme>