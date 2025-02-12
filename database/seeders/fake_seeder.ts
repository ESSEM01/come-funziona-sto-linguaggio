import { CineastFactory } from '#database/factories/cineast_factory'
import Cineast from '#models/cineast'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method

    await CineastFactory.createMany(10)
  }
}