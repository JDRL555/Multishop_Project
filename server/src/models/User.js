import { user_client as client } from '../utils/db.js'
import { encrypt } from '../services/Auth.services.js'

export class User {
  async getAll() {
    const users = await client.query("SELECT * FROM users")
    return users.rows  
  }

  async getOne(id) {
    try {
      const userFound = await client.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
      )
      if(userFound.rows.length === 0) {
        return {
          error: true,
          status: 404,
          msg: "User not found"
        }
      }
      return {
        error: true,
        status: 200,
        msg: "User found",
        user: userFound.rows[0]
      }
    } catch (error) {
      return {
        error: true,
        status: 400,
        msg: error?.detail || error
      }
    }
  }

  async getByEmail(value) {
    try {
      const users = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [value]
      )
      if(users.rows.length === 0) {
        return {
          error: true,
          status: 404,
          msg: "Usuario no encontrado"
        }
      }
      return {
        error: false,
        status: 200,
        msg: "Usuario encontrado",
        user: users.rows[0]
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

  async create({ fullname, phone_contact, phone_messages, email, db_username, db_password, db_host, password, cycles }) {
    try {
      const encryptedPassword = await encrypt(password)

      const createResult = await client.query(
        "INSERT INTO users (fullname, phone_contact, phone_messages, email, db_username, db_password, db_host, password, cycles) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [fullname, phone_contact, phone_messages, email, db_username, db_password, db_host, encryptedPassword, cycles]
      )

      if(createResult.rowCount === 1) {
        return { 
          error: false,
          status: 201,
          msg: "User created successfully!" 
        }
      } else {
        return { 
          error: true,
          status: 400,
          msg: "Something went wrong creating the user..." 
        }
      }
    } catch (error) {
      console.log(error)
      return {
        error: true,
        status: 400,
        msg: error?.detail || error
      }
    }
  }

  async update({ id, newData }) {
    try {
      const result = await this.getOne(id)
      if(!result?.user) {
        return result
      }

      let query = "UPDATE users SET "

      const valueArray = []

      for(const [key, value] of Object.entries(newData)) {
        query += `${key} = $`
        valueArray.push(value)
      }

      valueArray.push(id)

      let counter = 1
      let matches = query.match(/\$/g).length

      const array = query.split("")

      array.map((letter, i) => {
        if(letter === "$") {
          if(counter !== matches) {
            array[i] = `$${counter}, `
          } else {
            array[i] = `$${counter}`
          }
          counter++
        }
      })

      query = array.join("")

      query += ` WHERE id = $${counter};`
 

      const results = await client.query(query, valueArray)

      const { user } = await this.getOne(id)

      if(results.rowCount === 1) {
        return {
          error: false,
          status: 200,
          msg: "Updated successfully!",
          user
        }
      } else {
        return {
          error: true,
          status: 500,
          msg: "Something went wrong..."
        }
      }
    } catch (error) {
      return {
        error: true,
        status: 400,
        msg: error
      }
    }
  }

  async delete({ id }) {
    try {
      const result = await this.getOne(id)

      if(!result?.user) {
        return result
      }

      const deleted = await client.query("DELETE FROM users WHERE id = $1", [id])

      if(deleted.rowCount === 1) {
        return {
          error: false,
          status: 200,
          msg: "Deleted successfully!"
        }
      } else {
        return {
          error: true,
          status: 500,
          msg: "Something went wrong..."
        }
      }

    } catch (error) {
      return {
        error: true,
        status: 400,
        msg: error
      }
    }
  }
}