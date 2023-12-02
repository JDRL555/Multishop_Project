import { login as logUser, checkToken } from '../services/Auth.services.js'
import { validateAuth } from '../schemas/AuthSchema.js'

const controller = {}

controller.login = async (req, res) => {
  try {
    const result = validateAuth(req.body)

    if(result.error) {
      return res.status(400).json({
        error: true,
        status: 400,
        msg: JSON.parse(result.error.message).map(result => result.message)
      })
    }

    const { email, password } = result.data

    const response = await logUser(email, password)

    if(response.error) {
      return res.status(400).json({
        error: true,
        status: 400,
        msg: response.message
      })
    }

    return res.status(200).json({
      error: false,
      status: 200,
      token: response.token
    })

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      error: true,
      status: 400,
      msg: error
    })
  }
}

controller.checkToken = async (req, res) => {
  try {
    const token = req.query.token
    if(!token) return res.status(400).json({ error: true, message: "El token es requerido" })
    const response = await checkToken(token)
    if(response.error) return res.status(400).json(response)
    return res.status(200).json(response)
  } catch (error) {
    
  }
}

export { controller }