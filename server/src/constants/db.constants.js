export const ADMIN_DB = {
  user: process.env.ADMIN_POSTGRES_USER,
  host: process.env.ADMIN_POSTGRES_HOST,
  database: process.env.ADMIN_POSTGRES_DB,
  password: process.env.ADMIN_POSTGRES_PASSWORD,
  port: Number(process.env.ADMIN_POSTGRES_PORT),
}