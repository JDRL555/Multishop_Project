import pg from 'pg'
import { DB } from '../constants/db.constants.js'

export async function connectToDB() {
  try {
    const connection = new pg.Pool(DB)
    const client = await connection.connect()
    return client
  } catch (err) {
    throw new Error(err)
  }
}