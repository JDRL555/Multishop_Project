import { PrismaClient } from '@prisma/client'
import { MONTHS } from '../constants/date.constants.js'
import moment from 'moment'

export class SalesMaster {
  /** @param {moment.Moment} from @param {moment.Moment} to */
  static async getTotalSold(from, to) {
    const client = new PrismaClient()
    const totals = {}
    
    const fromMonth = from.month() + 1
    const toMonth = to.month() + 1
    
    for (let month = fromMonth; month <= toMonth; month++) {
      let dateFrom
      let dateTo
      if(month === fromMonth) {
        const endOfMonth = from.clone().endOf("month").daysInMonth()
        dateFrom = from.toDate()
        dateTo = new Date(`${month}/${endOfMonth}/${from.year()}`)
      } else if (month === toMonth) {
        dateFrom = new Date(`${month}/01/${to.year()}`)
        dateTo = to.toDate()
      } else {
        const endOfMonth = moment(`${month}/01/${from.year()}`).clone().endOf("month").daysInMonth()
        dateFrom = new Date(`${month}/01/${from.year()}`)
        dateTo = new Date(`${month}/${endOfMonth}/${from.year()}`)
      }
      const { _sum: { total } } = await client.sales_master.aggregate({
        _sum: {
          total: true
        },
        where: {
          date: {
            gte: dateFrom,
            lte: dateTo
          }
        }
      })
      totals[MONTHS[month]] = Number(total)
    }
    await client.$disconnect()
    return totals
  }
}