import { Router } from 'express'
import { controller } from '../controllers/dashboard.controller.js'

const dashboardRouter = Router()

dashboardRouter.post("/", controller.getIndexes)

export { dashboardRouter }