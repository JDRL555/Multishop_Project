import { login as logUser } from '../services/Auth.services.js'
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
    return res.status(400).json({
      error: true,
      status: 400,
      msg: error
    })
  }
}

export { controller }