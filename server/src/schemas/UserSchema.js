import z from 'zod'

import { MESSAGES } from '../constants/schemas.constants.js'

const userSchema = z.object({
  name: z.string(MESSAGES.user.name),
  email: z.string(MESSAGES.user.email).email(MESSAGES.user.emailFormat),
  password: z.string(MESSAGES.user.password).min(8, MESSAGES.user.passwordLength),
})

export function validateUser(obj) {
  return userSchema.safeParse(obj)
}

export function validatePartialUser(obj) {
  return userSchema.partial().safeParse(obj)
}