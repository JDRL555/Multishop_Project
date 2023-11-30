import { genSalt, hash, compare } from 'bcrypt'

export async function encrypt(password) {
  const salts = await genSalt(10)
  const encrypted = await hash(password, salts)
  return encrypted
}

export async function decrypt(password, encrypted) {
  return await compare(password, encrypted)
}