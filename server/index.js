import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { PORT } from './src/constants/server.constants.js'

import { userRouter } from './src/router/users.routes.js'
import { authRouter } from './src/router/auth.routes.js'

import { CORS_CONFIG } from './src/config/cors.config.js'

const app = express()

app.use(morgan("dev"))
app.use(cors(CORS_CONFIG))

app.use(express.json())

app.use("/users", userRouter)
app.use("/auth", authRouter)

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))