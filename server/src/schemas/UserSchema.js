import z from 'zod'

import { MESSAGES } from '../constants/schemas.constants.js'

const userSchema = z.object({
  fullname: z.string(MESSAGES.user.fullname),
  phone_contact: z.string(MESSAGES.user.phone_contact).max(15, MESSAGES.user.phone_contact.max_length),
  phone_message: z.string(MESSAGES.user.phone_message).max(15, MESSAGES.user.phone_message.max_length),
  email: z.string(MESSAGES.user.email).email(MESSAGES.user.email.format),
  db_username: z.string(MESSAGES.user.db_username),
  db_password: z.string(MESSAGES.user.db_password),
  db_host: z.string(MESSAGES.user.db_host),
  password: z.string(MESSAGES.user.password).min(8, MESSAGES.user.password.min_length),
  is_enabled: z.boolean(MESSAGES.user.is_enabled).default(true),
  cycles: z.number(MESSAGES.user.cycles).int(MESSAGES.user.cycles.format).positive(MESSAGES.user.cycles.positive)
})

export function validateUser(obj) {
  return userSchema.safeParse(obj)
}

export function validatePartialUser(obj) {
  return userSchema.partial().safeParse(obj)
}