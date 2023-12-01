import { Router } from 'express'
import { controller } from '../controllers/users.controller.js'

const userRouter = Router()

userRouter.get("/", controller.getUsers)
userRouter.get("/:id", controller.getUser)
userRouter.post("/", controller.createUser)
userRouter.patch("/:id", controller.updateUser)
userRouter.delete("/:id", controller.deleteUser)

export { userRouter }