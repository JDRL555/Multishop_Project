import { genSalt, hash, compare } from 'bcrypt'

export class Auth {
  async encrypt(password) {
    const salts = await genSalt(10)
    const encrypted = await hash(password, salts)
    return encrypted
  }
}