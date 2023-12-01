import { PrismaClient } from '@prisma/client'

let client

try {
  client = new PrismaClient()
  await client.$connect()
  console.log("Connected to db")
} catch (error) {
  throw new Error(error)
}

export { client }