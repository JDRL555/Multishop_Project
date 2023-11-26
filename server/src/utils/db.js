import pg from 'pg'

export async function connectToDB(DB_config) {
  try {
    const connection = new pg.Pool(DB_config)
    const client = await connection.connect()
    return client
  } catch (err) {
    throw new Error(err)
  }
}