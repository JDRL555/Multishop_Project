import z from 'zod'

import { MESSAGES } from '../constants/schemas.constants.js'

const authSchema = z.object({
  email: z.string(MESSAGES.user.email).email(MESSAGES.user.email.format),
  password: z.string(MESSAGES.user.password).min(8, MESSAGES.user.password.min_length),
})

export function validateAuth(obj) {
  return authSchema.safeParse(obj)
}