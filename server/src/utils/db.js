import { PrismaClient } from '@prisma/client'

export async function connect() {
  try {
    const client = new PrismaClient()
    await client.$connect()
    return client
  } catch (error) {
    throw new Error(error)
  }
}