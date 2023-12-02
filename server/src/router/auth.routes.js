import { Router } from 'express'
import { controller } from '../controllers/auth.controller.js'

const authRouter = Router()

authRouter.post("/", controller.login)
authRouter.get("/", controller.checkToken)

export { authRouter }