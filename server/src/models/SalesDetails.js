import { PrismaClient } from '@prisma/client'
import { MONTHS } from '../constants/date.constants.js'

export class SalesDetails {
  /** @param {Number} cycles @param {Number} currentMonth */
  static async getUtility(cycles, currentMonth) {
    const client = new PrismaClient()
    const utilities = {}
    for (let i = currentMonth; i >= currentMonth - cycles; i--) {
      const modifiedDate = new Date(`${i}/1/${new Date().getFullYear()}`)

      const {
        _sum: { 
          product_price, product_cost, amount_sold 
        } 
      } = await client.sales_details.aggregate({
        _sum: {
          product_price: true,
          product_cost: true,
          amount_sold: true
        },
        where: {
          date: {
            lte: new Date(),
            gte: modifiedDate
          }
        }
      })
      utilities[MONTHS[i]] = (Number(product_price) - Number(product_cost)) * Number(amount_sold)
    }
    await client.$disconnect()
    return utilities
  }
}