import { User } from '../models/User.js'
import { validatePartialUser, validateUser } from '../schemas/UserSchema.js'

const userController = {}

userController.getUsers = async (req, res) => {
  const users = await new User().getAll()
  return res.json({ users })
}

userController.getUser = async (req, res) => {
  const id = req.params.id
  const response = await new User().getOne({ id })
  return res.status(response.status).json(response)
}

userController.createUser = async (req, res) => {
  const data = req.body

  const result = validateUser(data)

  if(result.error) {
    return res.status(400).json({
      error: true,
      status: 400,
      msg: JSON.parse(result.error.message).map(result => result.message)
    })
  }

  const user = new User()

  const response = await user.create(result.data)

  return res.status(response.status).json(response)
}
userController.updateUser = async (req, res) => {
  const id = req.params.id
  const newData = req.body

  const result = validatePartialUser(newData)

  if(result.error) {
    return res.status(400).json({
      error: true,
      status: 400,
      msg: JSON.parse(result.error.message).map(result => result.message)
    })
  }

  const user = new User()
  const response = await user.update({ id, newData: result.data })

  return res.status(response.status).json(response)
}
userController.deleteUser = async (req, res) => {
  const id = req.params.id

  const user = new User()

  const response = await user.delete({ id })

  return res.status(response.status).json(response)
}

export { userController }