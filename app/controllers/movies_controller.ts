import Movie from '#models/movie'
import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async index({ view }: HttpContext) {
    const movies = await Movie.all()   //Fa una query di tutti gli elementi

    return view.render('pages/home', { movies })
  }

  async show({ view, params }: HttpContext) {
    const movie = await Movie.findByOrFail( 'slug', params.slug)

    return view.render('pages/movies/show', { movie })
  }

  async flushCache() {
    const movies = await Movie.all()
    return movies
  }

}