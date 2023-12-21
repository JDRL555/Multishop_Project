const controller = {}
import { SalesMaster } from '../models/SalesMaster.js'
import { SalesDetails } from '../models/SalesDetails.js'

import moment from 'moment'

controller.getIndexes = async (req, res) => {
  try {
    const { from, to } = req.body
  
    const fromDate = moment(from, "YYYYMMDD")
    const toDate = moment(to, "YYYYMMDD")
  
    const dialyAverageTotalSold = {}
  
    const totalSold = await SalesMaster.getTotalSold(fromDate, toDate)
    
    res.json({
      totalSold
    })
  } catch (error) {
    res.json(error)
  }
}

export { controller }