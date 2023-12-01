import { genSalt, hash, compare } from 'bcrypt'
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'

export async function encrypt(password) {
  const salts = await genSalt(10)
  const encrypted = await hash(password, salts)
  return encrypted
}

export async function decrypt(password, encrypted) {
  return await compare(password, encrypted)
}

export async function login(email, password) {
  const user = new User()
  const userFound = await user.getByFilter("email", email)

  if(userFound) {
    const isValidPassword = await decrypt(password, userFound.user.password)
    if (isValidPassword) {
      const { fullname, email } = userFound.user
      let token = jwt.sign(
        { 
          user: {
            fullname, email 
          } 
        }, 
        process.env.SECRET_KEY, 
        { expiresIn: "2h" }
      )
      return {
        error: false,
        token
      }
    } else {
      return {
        error: true,
        message: "Clave Incorrecta"
      }
    }
  } else {
    return {
      error: true,
      message: "Correo Incorrecto",
    }
  }
}