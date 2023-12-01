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
      if(userFound.user.failed_attempts === 4) {
        return {
          error: true,
          message: "Máxima cantidad de intentos alcanzados. Tu cuenta ha sido bloqueada. Contactese con el administrador para solventar el problema"
        }
      }
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
      await user.update({ id: userFound.user.id, newData: { failed_attempts: 0 }})
      return {
        error: false,
        token
      }
    } else {
      let newData = { 
        failed_attempts: userFound.user.failed_attempts + 1 
      }
      if(newData.failed_attempts === 3) newData = {...newData, is_enabled: false}
      if(userFound.user.failed_attempts === 4) {
        return {
          error: true,
          message: "Máxima cantidad de intentos alcanzados. Tu cuenta ha sido bloqueada. Contactese con el administrador para solventar el problema"
        }
      } else {
        await user.update({ id: userFound.user.id, newData })
      }
      return {
        error: true,
        message: `Clave incorrecta. Te ${newData.failed_attempts === 1 ? "quedan" : "queda"} ${3 - userFound.user.failed_attempts} ${newData.failed_attempts === 1 ? "intentos" : "intento"}`
      }
    }
  } else {
    return {
      error: true,
      message: "Correo Incorrecto",
    }
  }
}