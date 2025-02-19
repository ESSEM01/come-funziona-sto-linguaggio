import { movies } from '#database/data/movies'
import { CineastFactory } from '#database/factories/cineast_factory'
import { MovieFactory } from '#database/factories/movie_factory'
import { UserFactory } from '#database/factories/user_factory'
import MovieStatuses from '#enums/movie_statuses'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    await CineastFactory.createMany(10)
    await UserFactory.createMany(5)
    await this.#createMovies()
  }

  async #createMovies() {
    // Crea film dal dataset esistente
    for (let i = 0; i < movies.length; i++) {
      const movie = movies[i]
      const released = DateTime.now().set({ year: movie.releaseYear })
      
      await MovieFactory.merge({
        statusId: MovieStatuses.RELEASED,
        title: movie.title,
        releasedAt: DateTime.fromJSDate(
          new Date(released.year, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
        )
      }).create()
    }

    // Crea film aggiuntivi
    await MovieFactory.createMany(3)
    await MovieFactory.apply('released').createMany(3)
    await MovieFactory.apply('releasingSoon').createMany(3)
    await MovieFactory.apply('postProduction').createMany(3)
  }
}