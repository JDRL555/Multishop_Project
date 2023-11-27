import { Router } from 'express'
import { userController } from '../controllers/users.controller.js'

const userRouter = Router()

userRouter.get("/", userController.getUsers)
userRouter.get("/:id", userController.getUser)
userRouter.post("/", userController.createUser)
userRouter.patch("/:id", userController.updateUser)
userRouter.delete("/:id", userController.deleteUser)

export { userRouter }