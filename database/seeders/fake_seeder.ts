import { CineastFactory } from '#database/factories/cineast_factory'
import { MovieFactory } from '#database/factories/movie_factory'
import { UserFactory } from '#database/factories/user_factory'
import MovieStatuses from '#enums/movie_statuses'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Prima crea i Cineast
    await CineastFactory.createMany(10)
    
    // Poi crea i film che fanno riferimento ai Cineast
    await MovieFactory.merge({
      statusId: MovieStatuses.RELEASED,
      releasedAt: DateTime.now().minus({ month: 1 }).toSQL()
    }).createMany(3)
  }
}