import { connect } from '../utils/db.js'
import { encrypt } from '../services/Auth.services.js'

export class User {
  async getAll() {
    const client = await connect()
    const users = await client.user.findMany()
    return users
  }

  async getOne(id) {
    try {
      const client = await connect()
      const user = await client.user.findFirst({ where: { id: Number(id) } })
      if(!user?.id) {
        return {
          error: true,
          status: 404,
          msg: "Usuario no encontrado"
        }
      }
      return {
        error: true,
        status: 200,
        msg: "Usuario encontrado",
        user
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        status: 400,
        msg: error
      }
    }
  }

  async getByFilter(key, value) {
    try {
      const client = await connect()
      const user = await client.user.findFirst({ where: { [key]: value } })
      if(!user?.id) {
        return {
          error: true,
          status: 404,
          msg: "Usuario no encontrado"
        }
      }
      return {
        error: true,
        status: 200,
        msg: "Usuario encontrado",
        user
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        status: 400,
        msg: error
      }
    }
  }

  async create(newData) {
    try {
      const encryptedPassword = await encrypt(newData.password)
      const encryptedDbPassword = await encrypt(newData.db_password)
      
      const client = await connect()

      const newUser = await client.user.create({
        data: {
          ...newData, 
          password: encryptedPassword, 
          db_password: encryptedDbPassword
        }
      })
      
      return { 
        error: false,
        status: 201,
        msg: "Usuario creado exitósamente!",
        user: newUser 
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        status: 400,
        msg: error
      }
    }
  }

  async update({ id, newData }) {
    try {
      const client = await connect() 

      const updated = await client.user.update({
        data: newData,
        where: {
          id: Number(id)
        }
      })

      return {
        error: false,
        status: 200,
        msg: "Usuario actualizado exitosamente!",
        user: updated
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        status: 400,
        msg: "Usuario no encontrado"
      }
    }
  }

  async delete(id) {
    try {
      const client = await connect()
      const user = await client.user.delete({ where: { id: Number(id) } })
      if(!user?.id) {
        return {
          error: true,
          status: 404,
          msg: "Usuario no encontrado"
        }
      }
      return {
        error: true,
        status: 200,
        msg: "Usuario eliminado exitosamente"
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        status: 400,
        msg: error
      }
    }
  }
}