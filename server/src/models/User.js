import { connectToDB } from '../utils/db.js'
import { ADMIN_DB } from '../constants/db.constants.js'

import { Auth } from './Auth.js'

export class User {
  async getAll() {
    const client = await connectToDB(ADMIN_DB)
    const users = await client.query("SELECT * FROM clients")
    return users.rows  
  }

  async getOne({ id }) {
    try {
      const client = await connectToDB(ADMIN_DB)
      const userFound = await client.query(
        "SELECT * FROM clients WHERE id = $1",
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

  async create({ 
    fullname, phone_contact, phone_message, email, db_username, db_password, db_host, password, cycles 
  }) {
    try {
      const auth = new Auth()
      const encryptedPassword = await auth.encrypt(password)
      
      const client = await connectToDB(ADMIN_DB)
      const createResult = await client.query(
        "INSERT INTO clients (fullname, phone_contact, phone_messages, email, db_username, db_password, db_host, password, cycles) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)",
        [fullname, phone_contact, phone_message, email, db_username, db_password, db_host, encryptedPassword, cycles]
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

      let query = "UPDATE clients SET "

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

      const client = await connectToDB(ADMIN_DB) 

      const results = await client.query(query, valueArray)

      if(results.rowCount === 1) {
        return {
          error: false,
          status: 200,
          msg: "Updated successfully!"
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

      const client = await connectToDB(ADMIN_DB)
      const deleted = await client.query("DELETE FROM clients WHERE id = $1", [id])
      
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