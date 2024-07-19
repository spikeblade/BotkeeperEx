import { type Response } from 'express'

export const handleHttpError = (res: Response, error: string): Response => {
  return res
    .status(500)
    .send({ success: false, message: 'Something went wrong.', error })
}


