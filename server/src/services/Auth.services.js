import { genSalt, hash, compare } from 'bcrypt'
import { User } from '../models/User.js'
import { MAXIMUM_FAILED_ATTEMPTS } from '../constants/auth.constants.js'
import jwt from 'jsonwebtoken'

export async function encrypt(password) {
  const salts = await genSalt(10)
  const encrypted = await hash(password, salts)
  return encrypted
}

export async function decrypt(password, encrypted) {
  return await compare(password, encrypted)
}

async function addFailedAttempt(userFound, user) {
  let newData = { 
    failed_attempts: userFound.failed_attempts + 1,
    is_enabled: userFound.failed_attempts !== MAXIMUM_FAILED_ATTEMPTS
  }
  const { user: userUpdated } = await user.update({ id: userFound.id, newData })
  return {
    error: true,
    message: `Clave incorrecta. Te ${userUpdated.failed_attempts === 3 ? "queda" : "quedan"} ${4 - userUpdated.failed_attempts} ${userUpdated.failed_attempts === 3 ? "intento" : "intentos"}`
  }
}

async function checkFailedAttempts(userFound) {
  if(userFound.failed_attempts >= MAXIMUM_FAILED_ATTEMPTS) {
    return {
      error: true,
      message: "Máxima cantidad de intentos alcanzados. Tu cuenta ha sido bloqueada. Contactese con el administrador para solventar el problema"
    }
  } else {
    return {
      error: false,
      message: ""
    }
  }
}

export async function login(email, password) {
  const user = new User()
  const userFound = await user.getByFilter("email", email)

  if(!userFound.error) {
    const result = await checkFailedAttempts(userFound.user)
    if(result.error) return result

    const isValidPassword = await decrypt(password, userFound.user.password)
    if (isValidPassword) {  
      const { id, fullname, email } = userFound.user
      let token = jwt.sign(
        { 
          user: {
            id, fullname, email 
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
      const result = await addFailedAttempt(userFound.user, user)
      return result
    }
  } else {
    return {
      error: true,
      message: "Correo Incorrecto",
    }
  }
}