import { PrismaClient } from '@prisma/client'
import pg from 'pg'
import { ADMIN_DB } from '../constants/db.constants.js'

let dashboard_client
let user_client

try {
  user_client = new pg.Pool(ADMIN_DB) 
  await user_client.connect()
  console.log("Connected to users db")
} catch (error) {
  throw new Error(error)
}

try {
  dashboard_client = new PrismaClient()
  await dashboard_client.$connect()
  console.log("Connected to dashboard db")
} catch (error) {
  throw new Error(error)
}

export { 
  dashboard_client, user_client 
}